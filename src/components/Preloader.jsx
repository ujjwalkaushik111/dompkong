import React from "react";
import Img_P from "../assets/img/webp/DompBottle.webp";
import Img_Pg from "../assets/img/webp/Dompgillas.webp";

const Preloader = () => {
  return (
    <div className="min-vh-100 w-100 d-flex align-items-center justify-content-center bg-black preloader_img position-fixed w-100 top-0 zindex-5 start-0">
      <div className="d-flex justify-content-center flex-column">
        <h4
          className="ff_Azo_Sans_Uber fw-normal fs_xl pt-4 text_ffffff text-center mb-5"
        >
          the kongs
        </h4>
        <div className="d-flex justify-content-center">
        <img width="50" className="Animation" src={Img_P} alt="#" />
        <img width="50" className="Animation" src={Img_Pg} alt="#" />
        <img width="50" className="Animation" src={Img_P} alt="#" />
        <img width="50" className="Animation" src={Img_Pg} alt="#" />
        <img width="50" className="Animation" src={Img_P} alt="#" />
      </div>
      </div>
     
    </div>
  );
};

export default Preloader;
