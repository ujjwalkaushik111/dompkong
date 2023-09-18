import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import About_img from "../assets/img/png/About_img.png"
import car from "../assets/img/webp/CARS.webp"
import watch from "../assets/img/webp/WATCHES.webp"
import boat from "../assets/img/webp/BOATS.webp"
import yellow_E from "../assets/img/webp/Ellipse444.webp"
import {Document, Deal , Contract} from './Icon'



const About = () => {
  return (
   <section className='bg-black pb-5'>
    <div className='MY-container pt-5'>
        <Row className='align-items-center my-5 py-lg-5 pt-0'>
            <Col lg={5} data-aos='fade-right'data-aos-duration='2000'>
              <h2 className='text_ffffff ff_Azo_Sans_Uber fw-normal fs_xl'>About </h2>
              <p className='text_ffffff fs_xsm fw-normal ff_montserrat'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra  amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
            </Col>
            <Col  lg={7} className=' position-relative' data-aos='fade-left'data-aos-duration='2000'>
                <div><img className='position-abs44 w-100' src={yellow_E} alt="#" /></div>
            <div id="slideshow" className='position-relative'>
                            <div class="entire-content">
                                <div class="content-carrousel">
                                    <figure class="shadow img_border"><img className='width_sm_100' src={boat} alt='boat' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={watch} alt='watch' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={car} alt='car' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={boat} alt='boat' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={watch} alt='watch' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={car} alt='car' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={boat} alt='boat' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={watch} alt='watch' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={car} alt='car' /></figure>
                                </div>
                            </div>
                        </div>
            </Col>
        </Row>
        <Row className='pb-5 '>
            <h2 className='text-center text_ffffff ff_Azo_Sans_Uber fw-normal fs_xl py-5'data-aos='fade-down'data-aos-duration='2000'>Utilities</h2>
            <Col xl={4} className='d-flex justify-content-center' data-aos='fade-right'data-aos-duration='2000'>
                <div className='Box_DDC  p-3 mt-4 position-relative overflow-hidden'>
                        <div className='light-Moon'></div>
                        <div className='light-Moon-abs'></div>
                   <div className='d-flex justify-content-center'>
                     <a href="#"><Document/></a>
                    </div>
                    <h2 className='text-cenetr h2_DDC'>Document</h2>
                    <p className='p_ddc'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                </div>
            </Col>
            <Col xl={4} className='d-flex justify-content-center' data-aos='flip-right'data-aos-duration='3000'>
            <div className='Box_DDC p-3 mt-4 position-relative overflow-hidden'>
                        <div className='light-Moon'></div>
                        <div className='light-Moon-abs'></div>

                <div className='d-flex justify-content-center '>
                     <a href="#"><Deal/></a>
                </div>
                    <h2 className='text-cenetr h2_DDC '>Deal</h2>
                    <p className='p_ddc'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
            </div>
            </Col>
            <Col xl={4} className='d-flex justify-content-center' data-aos='fade-left'data-aos-duration='2000'>
            <div className='Box_DDC p-3 mt-4 position-relative overflow-hidden'>
                        <div className='light-Moon'></div>
                        <div className='light-Moon-abs'></div>
                <div className='d-flex justify-content-center '>
                     <a href="#"><Contract/></a>
                </div>
                    <h2 className='text-cenetr h2_DDC '>Contract</h2>
                    <p className='p_ddc'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                </div>
            </Col>
        </Row>
    </div>
   </section>
  )
}

export default About