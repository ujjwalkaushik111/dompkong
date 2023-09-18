import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bottle from "../assets/img/webp/DompBottle.webp";
import Gilas from "../assets/img/webp/Dompgillas.webp";
import ellipse_l from "../assets/img/webp/Ellipse_L.webp";
import Shadow2 from "../assets/img/webp/shadow.webp";
import Shadow3 from "../assets/img/webp/ShadowBottom.webp";
import $ from "jquery"

const TheKong = () => {

  $(function(){
    $("#big-image img:eq(0)").nextAll().hide();
    $(".small-images img").click(function(e){
        var index = $(this).index();
        $("#big-image img").eq(index).show().siblings().hide();
    });
});

  const [plus, setPlus] = useState(0);
  function incriment() {
    setPlus(plus + 1)
  }
  function decrement() {
    if (plus > -10) {
      setPlus(plus - 1)
    } else {
      setPlus(plus)
    }
  }
  if (plus === 10) {
    document.getElementById("number").style.display = "none"
  }
  else if(plus === -1){
    document.getElementById("number").style.display = "none"
  }
   else if (plus === 9) {
    document.getElementById("number").style.display = "unset"
  }
  return (
    <section className="bg-black">
     
      <section className="MINT_bg py-5 position-relative pt-5">
        <img
          className="abs_YY w-50 d-lg-block d-none"
          src={ellipse_l}
          alt="#"
        />
        <img className='abs-shadow2 w-100' src={Shadow2} alt="#" />
        <img className='abs-shadowB w-100' src={Shadow3} alt="#" />
        <div className="MY-container position-relative">
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
              <div className="d-flex justify-content-center justify-content-lg-start">
              <h2 className="fw-normal text_ffffff fs_xl ff_Azo_Sans_Uber mb-3">
                Mint NFT
              </h2>
              </div>

              <div className="d-flex justify-content-between">
                <div className="ps-5 ps-lg-0 ">
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

              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
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
              <div className="my-4 d-flex justify-content-center justify-content-lg-start">
                <button className="yellow_box fw-normal width_sm_100 fs_md ff_Azo_Sans_Uber ">
                  MINT NOW
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </section>
  );
};

export default TheKong;
