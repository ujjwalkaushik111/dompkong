import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bottle from "../assets/img/png/DompBottle.png";
import Gilas from "../assets/img/png/Dompgillas.png";
import kingkongs from "../assets/img/png/real_kongs.png";
import hugh from "../assets/img/png/Hugh.png";
import rambo from "../assets/img/png/Rambo.png";
import albert from "../assets/img/png/Albert.png";
import prince from "../assets/img/png/Prince.png";
import royals from "../assets/img/png/Royals.png";
import heman from "../assets/img/png/He-Man.png";
import anonymous from "../assets/img/png/Anonymous.png";
import twopac from "../assets/img/png/Twopac.png";
import elvis from "../assets/img/png/Elvis.png";
import ellipse from "../assets/img/png/Ellipse.png";
import ellipse_l from "../assets/img/png/Ellipse_L.png";

const TheKong = () => {
  const [plus, setPlus] = useState(0);
  function incriment() {
    setPlus(plus + 1)
  }
  function decrement() {
    if (plus > 0) {
      setPlus(plus - 1)
    } else {
      setPlus(plus)
    }
  }
  if (plus === 10) {
    document.getElementById("number").style.display = "none"
  }
   else if (plus === 9) {
    document.getElementById("number").style.display = "unset"
  }
  return (
    <section className="bg-black">
      <section className="bg_black overflow-x-hidden py-5 mb-5">
        <h4 className="ff_Azo_Sans_Uber fw-normal fs_xl d-xl-none text_ffffff text-center py-5">
          the kongs
        </h4>
        <div className="d-xl-flex justify-content-between mb-5 pb-5">
          <div
            className="d-flex flex-xl-column justify-content-xl-center justify-content-between"
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <div className=" hugh">
              <img
                className="kong-shadow transition-kong"
                src={hugh}
                alt="hugh"
              />
            </div>
            <div className="  rambo">
              <img
                className="kong-shadow  transition-kong"
                src={rambo}
                alt="rambo"
              />
            </div>
            <div className="  albert">
              <img
                className="kong-shadow  transition-kong"
                src={albert}
                alt="#"
              />
            </div>
            <div className="  prince">
              <img
                className="kong-shadow  transition-kong"
                src={prince}
                alt="#"
              />
            </div>
            <div className="  royals">
              <img
                className="kong-shadow  transition-kong"
                src={royals}
                alt="#"
              />
            </div>
          </div>
          <div>
            <div className="pt-5 d-none d-xl-block">
              <h4
                className="ff_Azo_Sans_Uber fw-normal fs_xl pt-4 text_ffffff text-center"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                the kongs
              </h4>
            </div>
            <div className="kingkong position-relative z-1">
              <div
                className="z-2 position-relative"
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-delay="1000"
              >
                <img className="w-100 width-xxl-80 " src={kingkongs} alt="#" />
              </div>
              <div className="ellipse-kong">
                <img className="w-100" src={ellipse} alt="ellipse" />
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-xl-column justify-content-between justify-content-xl-center"
            data-aos="flip-left"
            data-aos-duration="3000"
          >
            <div className="heman">
              <img
                className="kong-shadow  transition-kong"
                src={heman}
                alt="#"
              />
            </div>
            <div className="anonymous">
              <img
                className="kong-shadow  transition-kong"
                src={anonymous}
                alt="#"
              />
            </div>
            <div className="twopac">
              <img
                className="kong-shadow  transition-kong"
                src={twopac}
                alt="#"
              />
            </div>
            <div className="elvis">
              <img
                className="kong-shadow  transition-kong"
                src={elvis}
                alt="#"
              />
            </div>
            <div className="hugh2">
              <img
                className="kong-shadow  transition-kong"
                src={hugh}
                alt="#"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="MINT_bg py-5 position-relative mt-5">
        <img
          className="abs_YY w-50 d-lg-block d-none"
          src={ellipse_l}
          alt="#"
        />
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div
                className="d-flex align-items-end justify-content-center justify-content-lg-start"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <img
                  className="width_50"
                  src={Bottle}
                  alt="#"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="2000"
                />

                <img
                  className="width_50"
                  src={Gilas}
                  alt="#"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
            </Col>
            <Col
              lg={6}
              className="mt-5"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="1000"
            >
              <h2 className="fw-normal text_ffffff fs_xl ff_Azo_Sans_Uber">
                Mint NFT
              </h2>

              <div className="d-flex justify-content-between">
                <div>
                  <h2 className="text_ffffff ff_montserrat fs_lg fw-900">
                    9999
                  </h2>
                  <p className="fw-normal fs_xsm text_ffffff ff_montserrat mb-4 pb-2">
                    of 10,000 minted
                  </p>

                  <h2 className="text_ffffff ff_montserrat fs_lg fw-900">
                    Max 9
                  </h2>
                  <p className="fw-normal fs_xsm text_ffffff ff_montserrat mb-4 pb-2">
                    NFTs per transaction
                  </p>
                </div>

                <div>
                  <h2 className="text_ffffff ff_montserrat fs_lg fw-900">
                    .2 ETH
                  </h2>
                  <p className="fw-normal fs_xsm text_ffffff ff_montserrat mb-4 pb-2">
                    per NFT
                  </p>

                  <h2 className="text_ffffff ff_montserrat fs_lg fw-900">
                    Max 2
                  </h2>
                  <p className="fw-normal fs_xsm text_ffffff ff_montserrat mb-4 pb-2">
                    Transaction per wallet
                  </p>
                </div>
              </div>

              {/* <img className='w-100' src={counting} alt="#" /> */}
              <div className="d-flex align-items-center justify-content-">
                <button onClick={decrement} className="button_sub me-2">
                  -
                </button>
                <button className="button_zero me-2">
                  <span id="number">0</span>
                  {plus}
                </button>
                <button onClick={incriment} className="button_sub">
                  +
                </button>
              </div>
              <div className="my-4">
                <div className="yellow_box fw-normal fs_md ff_Azo_Sans_Uber ">
                  MINT NOW
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TheKong;
