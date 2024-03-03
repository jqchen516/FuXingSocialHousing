import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const KioskNavBar = (props) => {
    return (
        <>
        <div class="container p-0 header">
            <div class="d-flex header-content align-items-center justify-content-between">
                <h1 class="logo ps-4 py-2 m-0 d-flex align-items-center">
                    {/* <Link to="/dashboard"><p class="m-0 fw-bold pt-3">福星社會住宅</p></Link> */}
                    <a href="/kiosk" class="">
                        <p class="m-0 fw-bold pt-3">福星社會住宅</p>
                    </a>
                </h1>
                <div class="managementAll text-center">
                    <a href="javascript:void(0)" class="tab" onclick="showTabContent(4)">
                        <li class="management-tab">
                            <span class="management-icon text-center">
                                <i class="fa-solid fa-building-circle-arrow-right"></i>
                                <span class="management-words text-white m-0">物業管理系統</span>
                            </span>
                        </li>
                    </a>
                </div>
            </div>
        </div>
        <div class="container px-0">
        <ul class="tab-wrap d-flex justify-content-center p-0">
          <div class="d-flex flex-column align-items-center m-3">
            <a href="javascript:void(0)" class="tab" onclick="showTabContent(1)">
              <li class="bus position-relative selected">
                <span class="position-absolute top-50 start-50 translate-middle d-inline-block text-center">
                  <i class="fa-solid fa-bus"></i>
                  <p class="text-white m-0">公車</p>
                </span>
              </li>
            </a>
          </div>
          <div class="d-flex flex-column align-items-center m-3">
            <a href="javascript:void(0)" class="tab" onclick="showTabContent(2)">
              <li class="mrt position-relative">
                <span class="position-absolute top-50 start-50 translate-middle text-center">
                  <i class="fa-solid fa-train-subway"></i>
                  <p class="text-white m-0">捷運</p>
                </span>
              </li>
            </a>
          </div>
          <div class="d-flex flex-column align-items-center m-3">
            <a href="javascript:void(0)" class="tab" onclick="showTabContent(3)">
              <li class="youbike position-relative ">
                <span  class="position-absolute top-50 start-50 translate-middle text-center">
                  <i class="fa-solid fa-bicycle"></i>
                  <p class="text-white m-0">Youbike</p>
                </span>
              </li>
            </a>
          </div>
        </ul>
      </div>
      </>
    );
}
