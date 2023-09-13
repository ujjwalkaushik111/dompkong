import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import About_img from "../assets/img/png/About_img.png"
import {Document, Deal , Contract} from './Icon'



const About = () => {
  return (
   <section className='bg-black pb-5'>
    <Container className='pt-2'>
        <Row className='align-items-center'>
            <Col lg={6} data-aos='fade-right'data-aos-duration='2000'>
              <h2 className='text_ffffff ff_Azo_Sans_Uber fw-normal fs_xl'>About </h2>
              <p className='text_ffffff fs_xsm fw-normal ff_montserrat'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
            </Col>
            <Col  lg={6} data-aos='fade-left'data-aos-duration='2000'>
                <img className='w-100' src={About_img} alt="#" />
            
            </Col>
        </Row>
        <Row className='pb-5'>
            <h2 className='text-center text_ffffff ff_Azo_Sans_Uber fw-normal fs_xl py-5'data-aos='fade-down'data-aos-duration='2000'>Utilities</h2>
            <Col lg={4} data-aos='fade-right'data-aos-duration='2000'>
                <div className='Box_DDC p-3 mt-4'>
                <div className='d-flex justify-content-center'>
                     <a href="#"><Document/></a>
                </div>
                    <h2 className='text-cenetr h2_DDC'>Document</h2>
                    <p className='p_ddc'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                </div>
            </Col>
            <Col lg={4} data-aos='flip-right'data-aos-duration='3000'>
            <div className='Box_DDC p-3 mt-4'>
                <div className='d-flex justify-content-center '>
                     <a href="#"><Deal/></a>
                </div>
                    <h2 className='text-cenetr h2_DDC '>Deal</h2>
                    <p className='p_ddc'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
            </div>
            </Col>
            <Col lg={4} data-aos='fade-left'data-aos-duration='2000'>
            <div className='Box_DDC p-3 mt-4'>
                <div className='d-flex justify-content-center '>
                     <a href="#"><Contract/></a>
                </div>
                    <h2 className='text-cenetr h2_DDC '>Contract</h2>
                    <p className='p_ddc'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default About