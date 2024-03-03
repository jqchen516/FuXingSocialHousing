import '../assets/scss/base.scss'
import '../assets/scss/footer.scss'
import '../assets/scss/header.scss'
import '../assets/scss/index.scss'
import '../assets/scss/mixin.scss'
import '../assets/scss/variables.scss'

import MRTMap from "../assets/images/mapAll裁切.png"
import MRTBlue from "../assets/images/台北捷運板南線斜式-藍線.png"
import MRTGreen from "../assets/images/台北捷運松山新店線(2017-11-22).png"

import axios from 'axios';
import { useEffect, useState } from 'react'

function MRTPage() {
    const [mrtBL01, setBL01] = useState(0);
    const [mrtBL23, setBL23] = useState(0);
    const [mrtBL05, setBL05] = useState(0);
    const [mrtG01, setG01] = useState(0);
    const [mrtG19, setG19] = useState(0);

    useEffect(() => {
        const d = new Date();
        const weekDay = d.getDay();

        function getMRTArrivedTime(){
            let query;
            if (weekDay === 6) {
                query = "StationID eq 'BL11' and DestinationStaionID eq 'BL01' and ServiceDay/ServiceTag eq '週六' or StationID eq 'BL11' and DestinationStaionID eq 'BL05' and ServiceDay/ServiceTag eq '週六' or StationID eq 'BL11' and DestinationStaionID eq 'BL23' and ServiceDay/ServiceTag eq '週六' or StationID eq 'G12' and DestinationStaionID eq 'G01' and ServiceDay/ServiceTag eq '假日' or StationID eq 'G12' and DestinationStaionID eq 'G19' and ServiceDay/ServiceTag eq '假日'"
            } else if (weekDay === 0) {
                query = "StationID eq 'BL11' and DestinationStaionID eq 'BL01' and ServiceDay/ServiceTag eq '週日' or StationID eq 'BL11' and DestinationStaionID eq 'BL05' and ServiceDay/ServiceTag eq '週日' or StationID eq 'BL11' and DestinationStaionID eq 'BL23' and ServiceDay/ServiceTag eq '週日' or StationID eq 'G12' and DestinationStaionID eq 'G01' and ServiceDay/ServiceTag eq '假日' or StationID eq 'G12' and DestinationStaionID eq 'G19' and ServiceDay/ServiceTag eq '假日'"
            } else {
                query = "StationID eq 'BL11' and DestinationStaionID eq 'BL01' and ServiceDay/ServiceTag eq '平日' or StationID eq 'BL11' and DestinationStaionID eq 'BL05' and ServiceDay/ServiceTag eq '平日' or StationID eq 'BL11' and DestinationStaionID eq 'BL23' and ServiceDay/ServiceTag eq '平日' or StationID eq 'G12' and DestinationStaionID eq 'G01' and ServiceDay/ServiceTag eq '平日' or StationID eq 'G12' and DestinationStaionID eq 'G19' and ServiceDay/ServiceTag eq '平日'"
            }
            // const headers = {
            //     "Accept": "application/json",
            //     "Authorization": "Bearer " + ""
            // }
            const params = {
                "$format": "json",
                "$filter": query
            }
            axios.get("https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationTimeTable/TRTC", {
                params: params
            })
            .then((response) => {
                response.data.forEach(element => {
                    let arrTime = getArrivedTime(d, element.Timetables);
                    if (element.RouteID === 'BL-1') {
                        if (element.DestinationStaionID === 'BL23') {
                            setBL23(arrTime);
                        } else if (element.DestinationStaionID === 'BL01') {
                            setBL01(arrTime);
                        }
                    } else if (element.RouteID === 'BL-2') {
                        if (element.DestinationStaionID === 'BL05') {
                            setBL05(arrTime);
                        }
                    } else if (element.RouteID === 'G-1') {
                        if (element.DestinationStaionID === 'G01') {
                            setG01(arrTime);
                        } else if (element.DestinationStaionID === 'G19') {
                            setG19(arrTime);
                        }
                    }
                });
            })
            .catch((error) => {
                console.log(error)
            })
        }

        function getArrivedTime(nowTime, timetables){
            let arrivedTime = 999;
            let nowHour = nowTime.getHours();
            if (nowHour === 0) {
                nowHour = 24;
            }
            let nowMin = nowTime.getMinutes();
            timetables.forEach(t => {
                let hours = Number(t.ArrivalTime.split(':')[0])
                if (hours === 0) {
                    hours = 24;
                }
                let min = Number(t.ArrivalTime.split(':')[1])
                if (hours === nowHour){
                    let diffTime = min - nowMin;
                    if ((diffTime >= 0) && (diffTime < arrivedTime)) {
                        arrivedTime = diffTime;
                    }
                } else if (hours === nowHour+1) {
                    let diffTime = min + (60 - nowMin);
                    if ((diffTime >= 0) && (diffTime < arrivedTime)) {
                        arrivedTime = diffTime;
                    }
                }
            })
            return arrivedTime;

        }
        getMRTArrivedTime();
      }, [mrtBL01, mrtBL05, mrtBL23, mrtG01, mrtG19]);



    return (
        <>
            <div id="tabContent2" className="tab-content active">

                <div className="bus-wrap d-flex flex-column align-items-center">
                    <div className="bus-map text-center">
                        <h3 className="underline-title text-white fw-bold mt-3">地理位置</h3>
                        <img src={MRTMap}
                            className="w-100 my-4" alt="捷運地圖" />


                    </div>

                    <h3 className="underline-title text-white fw-bold my-5">捷運路線</h3>
                    <div className="mrt-time bg-light p-4 rounded ">

                        <div className=" flex-wrap d-flex">
                            <div className="mrt-BL-board w-100">
                                <div className="mrt-terminal rounded">
                                    <a href="javascript:void(0)" className="sub-tab">
                                        <h6 className="text-white lh-lg fs-4 text-center m-0">板南線</h6>
                                    </a>
                                </div>
                                <div className="BL-information BL-words-color d-flex justify-content-around align-items-center my-3">

                                    <span className="BL01 BL-frame d-inline-block text-center">頂埔</span>
                                    {mrtBL01 === 999 ? 
                                    <span className="BL01-time d-inline-block text-center">末班車已過</span>:
                                    <span className="BL01-time d-inline-block text-center">{mrtBL01}分鐘後到站</span>}
                                    
                                </div>
                                <div className="BL-information BL-words-color d-flex justify-content-around align-items-center my-3">

                                    <span className="BL23 BL-frame d-inline-block text-center">南港展覽館</span>
                                    {mrtBL23 === 999 ? 
                                    <span className="BL23-time d-inline-block text-center">末班車已過</span>:
                                    <span className="BL23-time   d-inline-block text-center">{mrtBL23}分鐘後到站</span>}
                                </div>

                                <div><img src={MRTBlue} className="rounded py-4" alt="捷運板南線" /></div>
                            </div>

                            <div className="mrt-G-board w-100 mt-4">
                                <div className="mrt-arrival rounded">

                                    <a href="javascript:void(0)" className="sub-tab">
                                        <h6 className="text-white lh-lg fs-4 text-center m-0">新店線</h6>
                                    </a>
                                </div>
                                <div className="G-information G-words d-flex justify-content-around align-items-center my-3">

                                    <span className="BL23 BL-frame fs-3 d-inline-block text-center">新店</span>
                                    {mrtG01 === 999 ? 
                                    <span className="BL23-time d-inline-block text-center">末班車已過</span>:
                                    <span className="BL23-time text-center">{mrtG01}分鐘後到站</span>}
                                </div>

                                <div className="G-information G-words d-flex justify-content-around align-items-center my-3">

                                    <span className="BL23 BL-frame d-inline-block text-center">小碧潭</span>
                                    {mrtG19 === 999 ? 
                                    <span className="BL23-time d-inline-block text-center">末班車已過</span>:
                                    <span className="BL23-time text-center">{mrtG19}分鐘後到站</span>}
                                </div>
                            </div>
                            <div><img src={MRTGreen} className="rounded py-4" alt="捷運新店線" /></div>
                        </div>

                    </div>

                </div>


                <div className="farm-wrap pt-4">

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
export default MRTPage;