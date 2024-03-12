"use client";
import React from "react";
import "./style.scss";
import data from "../array";
import { useParams } from "next/navigation";
import ServiceSlide from "./ServiceSlide";
const Page = () => {


  const { id } = useParams();
  const filteredData = data.find((item) => {
    return item.slug === id;
  });
  console.log(id);
  console.log(filteredData);

  return (
    <div>
      <div className="flex1">
        <div className="img1">
          <ServiceSlide />
        </div>
        <div className="portion2">
          <div className="maternity">{filteredData.maternity}</div>
          <div className="pricing">{filteredData.pricing}</div>
          <div className="price">{filteredData.price}</div>
          <div className="view">{filteredData.view}</div>
          <div className="span1">{filteredData.contact}</div>
          <div className="cnext">{filteredData.packages}</div>
          <div className="next">{filteredData.youget}</div>
          <div className="next">{filteredData.type}</div>
          <div className="next">{filteredData.type2}</div>
          <div className="next">{filteredData.type3}</div>
          <div className="next">{filteredData.addParent}</div>
          <div className="next">{filteredData.highResolution}</div>
          <div className="next">{filteredData.youWant}</div>
        </div>
      </div>
      <div className="main">
        <div className="text8">{filteredData.contactUs}</div>
        <div className="flex2">
          <div className="div2">
            <div className="text9">{filteredData.firstName}</div>
            <input className="input1" placeholder="Your first Name"></input>
          </div>
          <div className="div2">
            <div className="text9">{filteredData.lastName}</div>
            <input className="input1" placeholder="Last Name"></input>
          </div>
          <div className="div2">
            <div className="text9">{filteredData.email}</div>
            <input className="input1" placeholder="Your email address"></input>
          </div>
          <div className="div2">
            <div className="text9">{filteredData.phoneNumber}</div>
            <input
              className="input1"
              placeholder="Your mobile or Phone number"
            ></input>
          </div>
          <div className="div2">
            <div className="text9">{filteredData.date}</div>
            <input className="input1" placeholder="Select Date"></input>
          </div>
          <div className="div2">
            <div className="text9">{filteredData.refer}</div>
            <input className="input1" placeholder="Person name"></input>
          </div>
        </div>
        <div className="text8">{filteredData.additionalComments}</div>
        <input className="input2 " placeholder="Your message(Optional)"></input>
        {/* span */}
        <div className="span">
          <div className="session">{filteredData.schedule}</div>
        </div>
      </div>
      <div className="flex3">
        <div
          className="box1"
          dangerouslySetInnerHTML={{ __html: filteredData.addInfo }}
        ></div>
        <div
          className="box1"
          dangerouslySetInnerHTML={{ __html: filteredData.addinfo2 }}
        ></div>
        <div
          className="box1"
          dangerouslySetInnerHTML={{ __html: filteredData.addinfo3 }}
        ></div>
      </div>
    </div>
  );
};



export default Page