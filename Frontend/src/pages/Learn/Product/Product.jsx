import React from "react";
import { useEffect, useRef, useState } from "react";
import "./Product.css";
import ReportIcon from "@mui/icons-material/Report";
// import LanguageTwoToneIcon from '@mui/icons-materialLanguageTwoTone';
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import ClosedCaptionRoundedIcon from "@mui/icons-material/ClosedCaptionRounded";

import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

import Header from "../../../components/Header";

import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import NoteAddSharpIcon from "@mui/icons-material/NoteAddSharp";
import SystemUpdateAltTwoToneIcon from "@mui/icons-material/SystemUpdateAltTwoTone";
import AllInclusiveTwoToneIcon from "@mui/icons-material/AllInclusiveTwoTone";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";


export const Product = () => {

  const cardRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const handleScroll = () => {
    if (cardRef.current) {
      const buttonPosition = cardRef.current.getBoundingClientRect().bottom;
      const screenHeight = window.innerHeight;
      const offset = 1200; // Adjust this value to control when the card sticks
      setIsSticky(buttonPosition < screenHeight - offset ? false : true);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div >
      <Header className="-z-10"/>
   
      {/* <PlayCircleFilledRoundedIcon/> */}
      <div className="">
  <div className="bg-[#2563EB] min-h-[350px] p-10">
    <div className="lg:ml-[135px] lg:mr-[545px]">
      <h1 className="text-white text-[37px] font-bold mb-7 mt-16">
        Learning Python for Data Analysis 
      </h1>

      <h3 className="white">
        Learn python and how to use it to analyze, visualize and present
        data. Includes tons of sample <br/> code and hours of video!
      </h3>

      <div>
        <span className="Ybox">Bestseller</span>
        <span className="darkyellow">
          4.3
          <span>
            <StarPurple500SharpIcon />
            <StarPurple500SharpIcon />
            <StarPurple500SharpIcon />
            <StarPurple500SharpIcon />
            <StarHalfSharpIcon />
          </span>
        </span>
        
      </div>

      <div className="Bcreated">
        <span className="white">Created by </span>
        <span className="purpal underline">Jose Portilla</span>
      </div>

      <div className="white BBbottom">
        <span className="BBicons">
          <ReportIcon />
        </span>
        <span className="BBbottomText">Last updated 9/2019</span>
        <span className="BBicons">
          <PublicTwoToneIcon />
        </span>
        <span className="BBbottomText">English</span>
        <span className="BBicons">
          
        </span>
      </div>
    </div>
  </div>
</div>


      {/* ////////////////////////////-------fixBox---------------//////// */}

   <div className="mt-20 lg:-ml-[50px]">
  
    <div className=" ">
  <div className="fixBox border border-blue-400 h-fit">
    
    <div className="innerFixBox">
      <div className="Ftop2lines">
        <div className="flex FTH">
          <h1 className="FT1"> ₹455 </h1>
          <span className="FT2"> ₹3,499 </span>
          <span className="FT3"> 87% off </span>
        </div>
        <div className="red">
          <AccessAlarmsIcon />
          <span className="">  5 hours</span> left at this price!
        </div>
      </div>

      <button className="w-full bg-[#2563EB] text-white h-12 text-[110%] mt-4 rounded-md border-none cursor-pointer">
        Go to Cart
      </button>
      <button className="w-full border border-black text-black h-12 text-[110%] rounded-md mt-4 cursor-pointer">
        Buy now
      </button>

      <p className="center mb-7">30-Day Money-Back Guarantee</p>

      <div className="ThisCourse">
        <h4>This course includes:</h4>
        <br />
        <p>
          <AllInclusiveTwoToneIcon /> Full lifetime access
        </p>
        <p>
          <PhoneAndroidTwoToneIcon /> Access on mobile and TV
        </p>
        <p>
          <EmojiEventsTwoToneIcon /> Certificate of completion
        </p>
      </div>

      <div className="gap underline pointer mt-7">
        <input
          id="coupon"
          type="text"
          placeholder="   Enter Coupon Code"
          className="w-full h-[45px] mt-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h4>Apply Coupon</h4>
      </div>

      {/* <div className="training">
        <h3>Want to learn more?</h3>
        <p>
          Get your membership on top courses anytime,
          anywhere.
        </p>
        <button className="buynowBtn btn2">All Courses</button>
      </div> */}
    </div>
  </div>
  </div>
</div>


      {/* --------------------------------------------------------------- */}
      <div className="lg:ml-[165px]">
      <h2 className="mt-4  text-lg font-bold">Explore related topics</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-700">Web Development</span>
              <span className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-700">Development</span>
            </div>

            <h2 className="mt-4 text-lg font-bold">What you'll learn</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>
              <li>Learn the latest technologies, including Javascript, React, Node, and even Web3 development.</li>
              <li>After the course you will be able to build ANY website you want.</li>
              <li>Build fully-fledged websites and web apps for your startup or business.</li>
            </ul>
      <br />
      <br />
      <br />
      <br />
      </div>
      <div className="mb-4 mt-10 ml-4 md:ml-8 lg:ml-44">
            <h2 className="text-2xl font-bold">Course content</h2>
            <p className="text-sm text-muted-foreground">44 sections • 373 lectures • 61h 44m total length</p>
          </div>

          <div className="space-y-2 ml-4 md:ml-8 lg:ml-44 w-full lg:w-[650px]">
            {/* Course sections */}
            {[{ title: "Front-End Web Development", duration: "10 hours", modules: "5 modules" },
            { title: "Introduction to HTML", duration: "5 hours", modules: "3 modules" },
              // Add other sections here
            ].map(({ title, duration, modules }) => (
              <div key={title}>
                <div className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center cursor-pointer" onClick={() => toggleSection(title)}>
                    <span className={`mr-2 transition-transform duration-300 ${expandedSections[title] ? "rotate-90" : ""}`}>
                      ➔ {/* Arrow icon */}
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600">Learn more</a>
                    <a href="#" className="text-blue-600">Take test</a>
                  </div>
                </div>
                <div
                  className={`ml-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${expandedSections[title] ? "max-h-40" : "max-h-0"
                    }`}
                >
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Duration:</strong> {duration}</p>
                    <p><strong>Modules:</strong> {modules}</p>
                  </div>
                </div>
              </div>
            ))}
             <div className="flex justify-center mt-4" ref={cardRef}>
            <button className="px-4 py-2 text-blue-600 border rounded">
              34 more sections
            </button>
          </div>
          </div>
         
    </div>
  );
};
