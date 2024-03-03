import '../assets/scss/base.scss'
import '../assets/scss/footer.scss'
import '../assets/scss/header.scss'
import '../assets/scss/index.scss'
import '../assets/scss/mixin.scss'
import '../assets/scss/variables.scss'

import uBikeParkingLY from "../assets/images/Youbike-洛陽停車場.png"
import uBikeIntersectionKX from "../assets/images/Youbike-開封西寧路口.png"

import axios from 'axios';
import React, {useEffect, useState}  from 'react';

function BikePage() {
    const [bikeKAIFENGXINING, setKFXN] = useState(0);
    const BIKESTATIONID_KAIFENGXINING = "TPE500113034";
    const [bikeLUOYANG, setLY] = useState(0);
    const BIKESTATIONID_LUOYANG = "TPE500113063";
    const [subContentTab, setSubContentTab] = useState(0);

    useEffect( () => {
        function getBike(){
            // const headers = {
            //     "Accept": "application/json",
            //     "Authorization": "Bearer " + ""
            // }
            const params = {
                "$top": "30",
                "$format": "json",
                "$filter": "StationUID eq 'TPE500113034' or StationUID eq 'TPE500113063'"
            }
            axios.get("https://tdx.transportdata.tw/api/basic/v2/Bike/Availability/City/Taipei", {
                params: params
            })
            .then((response) => {
                response.data.forEach(element => {
                    let stationID = element.StationUID
                    if (stationID === BIKESTATIONID_KAIFENGXINING) {
                        setKFXN(element.AvailableRentBikes)
                    } else if (stationID === BIKESTATIONID_LUOYANG) {
                        setLY(element.AvailableRentBikes)
                    }
                });
            })
            .catch((error) => {
                console.log(error)
            })
          }
          getBike()
    }, [bikeKAIFENGXINING, bikeLUOYANG])
    

    return (
        <>
            <div id="tabContent3" className="tab-content active">
                <div className="bus-map text-center">
                    <h3 className="underline-title text-white fw-bold mt-3">地理位置</h3>
                    {subContentTab === 0 ?<div id="subTabContent3_1" className="sub-tab-content active">
                        <img src={uBikeParkingLY} className="w-100 my-4" alt="youbike洛陽停車場" />
                    </div>:null}
                    {subContentTab === 1 ?<div id="subTabContent3_2" className="sub-tab-content active">
                        <img src={uBikeIntersectionKX} className="w-100 my-4" alt="youbike開封西寧路口" />
                    </div>:null}
                </div>

                <div className="youbike-wrap d-flex flex-wrap flex-md-nowrap justify-content-center">
                    <div className="youbike-block luoyang m-2">
                        <div className="d-flex align-items-center mt-2">
                            <span className="youbike-title-frame position-relative d-flex d-inline-block align-items-center">
                                <span style={{ fontSize: "2em", color: "#617DB3" }} className="d-flex d-inline-block justify-content-center">
                                    <i className="fa-solid fa-bicycle"></i></span><span className="ms-2 fs-2">Youbike</span></span>
                        </div>

                        <div className="youbike-information d-flex justify-content-center">
                            <div className="youbike-number text-center">
                                <p className="text-white m-0 fs-1 fw-bold">{bikeLUOYANG}台</p>
                            </div>
                        </div>

                        <a href="javascript:void(0)" className="sub-tab" onClick={() => setSubContentTab(0)}>
                            <div className="youbike-information">
                                <div className="text-center">
                                    <p className="m-0 pt-2 fs-1">洛陽停車場</p>
                                </div>
                            </div>
                        </a>

                        <div className="youbike-block kaifeng m-2">
                            <div className="d-flex align-items-center mt-2">
                                <span className="youbike-title-frame position-relative d-flex d-inline-block align-items-center"><span
                                    style={{ fontSize: "2em", color: "#617DB3" }} className="d-flex d-inline-block justify-content-center">
                                    <i className="fa-solid fa-bicycle"></i></span><span className="ms-2 fs-2">Youbike</span></span>
                            </div>


                            <div className="youbike-information d-flex justify-content-center">

                                <div className="youbike-number kaifeng text-center">
                                    <p className="text-white m-0 fs-1 fw-bold">{bikeKAIFENGXINING}台</p>
                                </div>
                            </div>

                            <a href="javascript:void(0)" className="sub-tab" onClick={() => setSubContentTab(1)}>
                                <div className="youbike-information">
                                    <div className="text-center">
                                        <p className="m-0 pt-2 fs-1">開封西寧路口</p>
                                    </div>
                                </div>
                            </a>
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
                </div>
            </div>
        </>
    )
}

export default BikePage;