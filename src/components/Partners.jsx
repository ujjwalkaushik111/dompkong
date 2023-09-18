import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/img/webp/NFTevening Logo.webp";
import img2 from "../assets/img/webp/NFT_Calendar.webp";
import img3 from "../assets/img/webp/Nebraska Furniture Mart Logo.webp";
import img4 from "../assets/img/webp/Fannie Mae Logo.webp";
import line from "../assets/img/webp/line_P.webp";
import img_part from "../assets/img/webp/boy1.webp";
import img_part2 from "../assets/img/webp/boy2.webp";
import img_part3 from "../assets/img/webp/boy3.webp";
import inst from "../assets/img/svg/bxl_instagram-alt.svg";
import twitter from "../assets/img/svg/icons_twitter-fill.svg";
import Slider from "react-slick";

const Partners = () => {
   // slick-sliderstart
   const SliderFour = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // End slick-slider
  return (
    <section className="bg-black py-5">
      <Container>
        <h2 className="text-center fw-normal fs_xl ff_Azo_Sans_Uber text_ffffff py-5 mb-3" data-aos='zoom-in'data-aos-duration='3000'>PARTNERS</h2>
        <Slider {...SliderFour}>
          <div className="d-flex justify-content-center mt-5" >
          <img src={img1} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
          <img src={line} alt="#" />
          </div>
          
           <div  className="d-flex justify-content-center">
          <img src={img2} alt="#" />
          </div>
           <div className="d-flex justify-content-center">
          <img src={line} alt="#" />
          </div>
          
          <div className="d-flex justify-content-center mt-4" >
          <img src={img3} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
          <img src={line} alt="#" />
          </div>
          <div className="d-flex justify-content-center mt-4">
          <img src={img4} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
          <img src={line} alt="#" />
          </div>
          </Slider>
      </Container>
      <Container className="mt-lg-5 pt-lg-5">
        <h2 className="text-center fw-normal fs_xl ff_Azo_Sans_Uber text_ffffff py-5 mt-4" data-aos='fade-down'data-aos-duration='3000'>Meet The Team</h2>
        <div className="line_Y"></div>
        <Row className="mb-5">
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-right'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-semibold ff_Montserrat fs_md">Jaylon Schleifer</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Carter Septimus</p>
               <img className="mb-5 scale-img mt-4" src={img_part} alt="#" />
            </Col>
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start"  data-aos='fade-left'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-bold ff_Montserrat fs_md mt-2">@Jaylon Schleifer</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd mb-4 mt-2">Nearly two decades in Business</p>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xsm">Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique. </p>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xsm">Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. </p>
                <div className="d-flex align-items-center gap-4">
                <img className="buller-y" src={inst} alt="#" />
                <img className="buller-y" src={twitter} alt="#" />
                </div>
             
            </Col>
        </Row>
        <div className="line_Y"></div>
        <Row  className="mb-5">
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-right'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-semibold ff_Montserrat fs_md">Talan Passaquindici Arcand</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Jakob Ekstrom Bothman</p>
               <img className="mb-5 scale-img mt-4" src={img_part2} alt="#" />
            </Col>
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-left'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-bold ff_Montserrat fs_md mt-2">@Talan Passaquindici Arcand</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd mb-4 mt-2">Invester  & International Top Model</p>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xsm">Neque hendrerit lectus neque molestie facilisis. Faucibus arcu eget facilisis nisl id ultricies. Aliquet eget scelerisque posuere habitant mauris quis ridiculus rutrum consectetur.  </p>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xsm">Pretium vitae nunc proin nullam turpis eu blandit. Nibh ultricies gravida vestibulum nec ultricies. Eleifend egestas non nunc, nisl tristique adipiscing non diam fermentum. </p>
                <div className="d-flex align-items-center gap-4">
                <img className="buller-y" src={inst} alt="#" />
                <img className="buller-y" src={twitter} alt="#" />
                </div>
             
            </Col>
        </Row>
        <div className="line_Y"></div>
        <Row  className="mb-5">
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-right'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-semibold ff_Montserrat fs_md">Alfonso Franci</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Alfonso Dokidis</p>
               <img className="mb-5 scale-img mt-4" src={img_part3} alt="#" />
            </Col>
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-left'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-bold ff_Montserrat fs_md mt-2">@Alfonso Franci</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd mb-4 mt-2">Nearly two decades in Business</p>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xsm">A ut sagittis, purus sit integer suspendisse lacus quam auctor. Interdum venenatis, sed ligula purus erat. A hac faucibus blandit euismod molestie amet nibh scelerisque. </p>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xsm">Fermentum aliquam fames suscipit scelerisque integer mauris sollicitudin. Tellus mattis egestas molestie elementum, elementum. Urna, in molestie ac quam nisl orci mattis. </p>
                <div className="d-flex align-items-center gap-4">
                <img className="buller-y" src={inst} alt="#" />
                <img className="buller-y" src={twitter} alt="#" />
                </div>
             
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
