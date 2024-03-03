import '../assets/scss/base.scss'
import '../assets/scss/footer.scss'
import '../assets/scss/header.scss'
import '../assets/scss/index.scss'
import '../assets/scss/mixin.scss'
import '../assets/scss/variables.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import BusPage from './BusPage'
import MRTPage from './MRTPage'
import BikePage from './BikePage'

import React, { useState } from 'react';

const KioskPage = (props) => {
  const [contentTab, setContentTab] = useState(1);
  function contentTabPage(props) {
    if (contentTab === 0) {
      return <BusPage />
    } else if (contentTab === 1) {
      return <BusPage />
    } else if (contentTab === 2) {
      return <MRTPage />
    } else if (contentTab === 3) {
      return <BikePage />
    } else {
      return <BusPage />
    }
  }


  return (
    <>
      <div className="container p-0 header">
        <div className="d-flex header-content align-items-center justify-content-between">
          <h1 className="logo ps-4 py-2 m-0 d-flex align-items-center">
            <a href="/" className="">
              <p className="m-0 fw-bold pt-3">福星社會住宅</p>
            </a>
          </h1>
          <div className="managementAll text-center">
            <a href="http://116.59.26.232/pad" className="tab" onClick={() => setContentTab(0)}>
              <li className="management-tab">
                <span className="management-icon text-center">
                  <i className="fa-solid fa-building-circle-arrow-right"></i>
                  <span className="management-words text-white m-0">物業管理系統</span>
                </span>
              </li>
            </a>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <ul className="tab-wrap d-flex justify-content-center p-0">
          <div className="d-flex flex-column align-items-center m-3">
            <a href="javascript:void(0)" className="tab" onClick={() => setContentTab(1)}>
              {contentTab === 1 ?
                <li className="bus position-relative selected">
                  <span className="position-absolute top-50 start-50 translate-middle d-inline-block text-center">
                    <i className="fa-solid fa-bus"></i>
                    <p className="text-white m-0">公車</p>
                  </span>
                </li> :
                <li className="bus position-relative">
                  <span className="position-absolute top-50 start-50 translate-middle d-inline-block text-center">
                    <i className="fa-solid fa-bus"></i>
                    <p className="text-white m-0">公車</p>
                  </span>
                </li>
              }
            </a>
          </div>
          <div className="d-flex flex-column align-items-center m-3">
            <a href="javascript:void(0)" className="tab" onClick={() => setContentTab(2)}>
              {contentTab === 2 ?
                <li className="mrt position-relative selected">
                  <span className="position-absolute top-50 start-50 translate-middle text-center">
                    <i className="fa-solid fa-train-subway"></i>
                    <p className="text-white m-0">捷運</p>
                  </span>
                </li> :
                <li className="mrt position-relative">
                  <span className="position-absolute top-50 start-50 translate-middle text-center">
                    <i className="fa-solid fa-train-subway"></i>
                    <p className="text-white m-0">捷運</p>
                  </span>
                </li>
              }
            </a>
          </div>
          <div className="d-flex flex-column align-items-center m-3">
            <a href="javascript:void(0)" className="tab" onClick={() => setContentTab(3)}>
              {contentTab === 3 ?
                <li className="youbike position-relative selected">
                  <span className="position-absolute top-50 start-50 translate-middle text-center">
                    <i className="fa-solid fa-bicycle"></i>
                    <p className="text-white m-0">Youbike</p>
                  </span>
                </li> : <li className="youbike position-relative ">
                  <span className="position-absolute top-50 start-50 translate-middle text-center">
                    <i className="fa-solid fa-bicycle"></i>
                    <p className="text-white m-0">Youbike</p>
                  </span>
                </li>
              }
            </a>
          </div>
        </ul>
        {contentTabPage()}
      </div>
    </>
  );
}

export default KioskPage;