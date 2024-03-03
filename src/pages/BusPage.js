import '../assets/scss/base.scss'
import '../assets/scss/footer.scss'
import '../assets/scss/header.scss'
import '../assets/scss/index.scss'
import '../assets/scss/mixin.scss'
import '../assets/scss/variables.scss'

import busStopWHSportCenter from "../assets/images/公車站-萬華運動中心.png"
import parkingLY from "../assets/images/公車站-洛陽停車場.png"
import parkFX from "../assets/images/公車站-福星公園.png"
import busRouteMapB29 from "../assets/images/藍29-裁切.png"
import busRouteMap938 from "../assets/images/938.png"

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function BusPage() {
    const [busLUOYANG, setLUOYANG] = useState(0);
    const BUSSTOPID_LUOYANG = "TPE12449";
    const [busWANHUASC, setWANHUASC] = useState(0);
    const BUSSTOPID_WANHUASC = "TPE12451";
    const [busFUXINGPARK, setFUXINGPARK] = useState(0);
    const BUSSTOPID_FUXINGPARK = "TPE125645";
    const [subContentTab, setSubContentTab] = useState(0);

    useEffect(() => {
        function getBus() {
            // const headers = {
            //     "Accept": "application/json",
            //     "Authorization": "Bearer " + ""
            // }
            const params = {
                "$top": "30",
                "$format": "json",
                "$filter": "StopUID eq 'TPE125645' or StopUID eq 'TPE12449' or StopUID eq 'TPE12451'"
            }
            axios.get("https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/Taipei", {
                params: params
            })
                .then((response) => {
                    response.data.forEach(element => {
                        let stationID = element.StopUID;
                        let time;
                        if (stationID === BUSSTOPID_LUOYANG) {
                            time = Math.floor(element.EstimateTime/60);
                            setLUOYANG(time)
                        } else if (stationID === BUSSTOPID_WANHUASC) {
                            time = Math.floor(element.EstimateTime/60);
                            setWANHUASC(time)
                        } else if (stationID === BUSSTOPID_FUXINGPARK) {
                            time = Math.floor(element.EstimateTime/60);
                            setFUXINGPARK(time)
                        }
                    });
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getBus()
    }, [busLUOYANG, busWANHUASC, busFUXINGPARK])

    return (
        <>
            <div id="tabContent1" className="tab-content active">
                <div className="bus-wrap d-flex flex-column align-items-center">
                    <div className="bus-map text-center">
                        <h3 className="underline-title text-white fw-bold mt-3">地理位置</h3>
                        {subContentTab === 0 ?
                            <div id="subTabContent1_4" className="sub-tab-content active">
                                <img src={busStopWHSportCenter} className="my-4 w-100" alt="公車站-萬華運動中心" />
                            </div> : null
                        }
                        {subContentTab === 1 ?
                            <div id="subTabContent1_5" className="sub-tab-content active">
                                <img src={parkingLY} className="my-4 w-100" alt="公車站-洛陽停車場" />
                            </div> : null
                        }
                        {subContentTab === 2 ?
                            <div id="subTabContent1_6" className="sub-tab-content active">
                                <img src={parkFX} className="my-4 w-100" alt="公車站-福星公園" />
                            </div> : null
                        }
                    </div>

                    <div className="bus-map text-center my-4">
                        <h3 className="underline-title text-white fw-bold">鄰近公車站牌</h3>
                    </div>

                    <div className="bus-time">
                        <div className="bustime-station d-flex justify-content-between">
                            <div className="Wanhua-exercise2"><a href="javascript:void(0)" className="sub-tab" onClick={() => setSubContentTab(0)}>
                                {subContentTab === 0 ? <h6 className="lh-lg text-center selected">萬華運動中心</h6> : <h6 className="lh-lg text-center">萬華運動中心</h6>}
                            </a>
                            </div>
                            <div className="Luoyang-parkinglot2"><a href="javascript:void(0)" className="sub-tab" onClick={() => setSubContentTab(1)}>
                                {subContentTab === 1 ? <h6 className="lh-lg text-center selected">洛陽停車場</h6> : <h6 className="lh-lg text-center">洛陽停車場</h6>}
                            </a>
                            </div>
                            <div className="Fushin-park2"><a href="javascript:void(0)" className="sub-tab" onClick={() => setSubContentTab(2)}>
                                {subContentTab === 2 ? <h6 className="lh-lg text-center selected">福星公園</h6> : <h6 className="lh-lg text-center">福星公園</h6>}
                            </a>
                            </div>
                        </div>


                        {subContentTab === 0 ? <div id="subTabContent1_1" className="sub-tab-content active">
                            <div className="Bus-information my-3 B29-words-color p-2 rounded z-1 d-flex align-items-center">

                                <span className="B29 fs-2 text-center py-2 rounded icon-frame d-inline-block position-relative"><a href="#"
                                    className="text-white stretched-link">藍29</a></span>

                                <span className="B29-arrival d-inline-block text-center">往聯合醫院中興院區</span>
                                <span className="B29-time text-center">{busWANHUASC}分鐘後到站</span>
                            </div>


                            <div className="bus-white text-center bg-light rounded">
                                <img src={busRouteMapB29} className="my-4" alt="藍29公車路線圖" />
                            </div>

                            <div className="Bus-information my-3 B29-words-color p-2 rounded z-1 d-flex align-items-center">
                                <span className="B29 fs-2 text-center py-2 rounded icon-frame d-inline-block position-relative"><a href="#"
                                    className="text-white stretched-link">938</a></span>

                                <span className="B29-arrival d-inline-block text-center">往捷運台大醫院站</span>
                                <span className="B29-time text-center">{busWANHUASC}分鐘後到站</span>
                            </div>

                            <div className="mb-4">
                                <div id="" className="bus-white text-center bg-light rounded">
                                    <img src={busRouteMap938} className="" alt="938公車路線圖" />
                                </div>
                            </div>

                        </div> : null
                        }


                        {subContentTab === 1 ? <div id="subTabContent1_2" className="sub-tab-content active">
                            <div className="Bus-information my-3 B29-words-color p-2 rounded z-1 d-flex align-items-center">

                                <span className="B29 fs-2 text-center py-2 rounded icon-frame d-inline-block position-relative"><a href="#"
                                    className="text-white stretched-link">藍29</a></span>
                                <span className="B29-arrival d-inline-block text-center">往聯合醫院中興院區</span>
                                <span className="B29-time text-center">{busLUOYANG}分鐘後到站</span>
                            </div>


                            <div className="bus-white text-center bg-light rounded mb-4">
                                <img src={busRouteMapB29} className="my-4" alt="藍29公車路線圖" />
                            </div>


                        </div> : null
                        }


                        {subContentTab === 2 ? <div id="subTabContent1_3" className="sub-tab-content active">
                            <div className="Bus-information my-3 B29-words-color p-2 rounded z-1 d-flex align-items-center">

                                <span className="B29 fs-2 text-center py-2 rounded icon-frame d-inline-block position-relative"><a href="#"
                                    className="text-white stretched-link">藍29</a></span>

                                <span className="B29-arrival d-inline-block text-center">往聯合醫院中興院區</span>
                                <span className="B29-time text-center">{busFUXINGPARK}分鐘後到站</span>
                            </div>


                            <div className="bus-white text-center bg-light rounded mb-4">
                                <img src={busRouteMapB29} className="my-4" alt="藍29公車路線圖" />
                            </div>


                        </div> : null
                        }


                    </div>
                </div>


                <div className="farm-wrap">

                    <div className="farm-block m-2 pt-2">

                        <div className="d-flex align-items-center">
                            <span
                                className="farm-title-frame position-relative d-flex d-inline-block align-items-center justify-content-center"><span
                                    className="fw-bold">RF 智慧農園</span></span>
                        </div>


                        <div className="farm-information d-flex justify-content-center">
                            <div className="farm-number text-center me-2">
                                <p className="text-white m-0 fs-1">溫度</p>
                                <p className="text-white m-0 fs-1">19.0<span>˚C</span></p>
                            </div>
                            <div className="farm-number text-center">
                                <p className="text-white m-0 fs-1">濕度</p>
                                <p className="text-white m-0 fs-1">30.3<span>%</span></p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="farm-wrap">
                    <div className="farm-block m-2 pt-2">
                        <div className="d-flex align-items-center">
                            <span
                                className="farm-title-frame position-relative d-flex d-inline-block align-items-center justify-content-center"><span
                                    className="fw-bold">15F 智慧農園</span></span>
                        </div>


                        <div className="farm-information d-flex justify-content-center">
                            <div className="farm-number text-center me-2">
                                <p className="text-white m-0 fs-1">溫度</p>
                                <p className="text-white m-0 fs-1">24.0<span>˚C</span></p>
                            </div>
                            <div className="farm-number text-center">
                                <p className="text-white m-0 fs-1">濕度</p>
                                <p className="text-white m-0 fs-1">25.3<span>%</span></p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="farm-wrap pb-2">
                    <div className="farm-block m-2 pt-2">
                        <div className="d-flex align-items-center">
                            <span
                                className="farm-title-frame position-relative d-flex d-inline-block align-items-center justify-content-center"><span
                                    className="fw-bold">10F 智慧農園</span></span>
                        </div>


                        <div className="farm-information d-flex justify-content-center">
                            <div className="farm-number text-center me-2">
                                <p className="text-white m-0 fs-1">溫度</p>
                                <p className="text-white m-0 fs-1">22.0<span>˚C</span></p>
                            </div>
                            <div className="farm-number text-center">
                                <p className="text-white m-0 fs-1">濕度</p>
                                <p className="text-white m-0 fs-1">26.3<span>%</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BusPage;