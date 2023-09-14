import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/img/png/NFTevening Logo.png";
import img2 from "../assets/img/png/NFT_Calendar.png";
import img3 from "../assets/img/png/Nebraska Furniture Mart Logo.png";
import img4 from "../assets/img/png/Fannie Mae Logo.png";
import line from "../assets/img/png/line_P.png";
import img_part from "../assets/img/png/boy1.png";
import img_part2 from "../assets/img/png/boy2.png";
import img_part3 from "../assets/img/png/boy3.png";
import inst from "../assets/img/png/bxl_instagram.png";
import twitter from "../assets/img/png/twitter-fill.png";

const Partners = () => {
  return (
    <section className="bg-black py-5">
      <Container>
        <h2 className="text-center fw-normal fs_xl ff_Azo_Sans_Uber text_ffffff py-5 mb-5" data-aos='zoom-in'data-aos-duration='3000'>PARTNERS</h2>
        <div className="d-flex align-items-center justify-content-between overflow-x-scroll" data-aos='flip-right'data-aos-duration='3000' data-aos-delay='1000'>
        
          <img src={img1} alt="#" />
          <img src={line} alt="#" />
        
          <img src={img2} alt="#" />
          <img src={line} alt="#" />
        
          <img src={img3} alt="#" />
          <img src={line} alt="#" />
        
          <img src={img4} alt="#" />
        </div>
      </Container>
      <Container>
        <h2 className="text-center fw-normal fs_xl ff_Azo_Sans_Uber text_ffffff py-5 mt-4" data-aos='fade-down'data-aos-duration='3000'>Meet The Team</h2>
        <div className="line_Y"></div>
        <Row className="mb-5">
            <Col lg={6} data-aos='fade-right'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-semibold ff_Montserrat fs_md">Jaylon Schleifer</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Carter Septimus</p>
               <img src={img_part} alt="#" />
            </Col>
            <Col lg={6} data-aos='fade-left'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-bold ff_Montserrat fs_md mt-2">@Jaylon Schleifer</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Nearly two decades in Business</p>
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
            <Col lg={6} data-aos='fade-right'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-semibold ff_Montserrat fs_md">Talan Passaquindici Arcand</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Jakob Ekstrom Bothman</p>
               <img src={img_part2} alt="#" />
            </Col>
            <Col lg={6} data-aos='fade-left'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-bold ff_Montserrat fs_md mt-2">@Talan Passaquindici Arcand</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Invester  & International Top Model</p>
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
            <Col lg={6} data-aos='fade-right'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-semibold ff_Montserrat fs_md">Alfonso Franci</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Alfonso Dokidis</p>
               <img src={img_part3} alt="#" />
            </Col>
            <Col lg={6} data-aos='fade-left'data-aos-duration='3000'>
                <h2 className="text_ffffff fw-bold ff_Montserrat fs_md mt-2">@Alfonso Franci</h2>
                <p className="text_ffffff fw-normal ff_Montserrat fs_xmd">Nearly two decades in Business</p>
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
