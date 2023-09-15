import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Twopac from '../assets/img/png/Roadmap_img.png'
import RM_LINE from '../assets/img/png/RM_LINE.png'
import { Roadmap1, Roadmap2, Roadmap3, Roadmap4, Roadmap5 } from './Icon'

const Roadmap = () => {
  return (
   <section className='bg-black'>
    <Container>
        <h2 className="text-center fw-normal fs_xl ff_Azo_Sans_Uber text_ffffff py-5" data-aos='zoom-in'data-aos-duration='3000' data-aos-delay='1000'>Roadmap</h2>
         <Row>
            <Col xl={4} className='d-flex align-items-center justify-content-center justify-content-xl-start position-relative'>
                <img data-aos='fade-right'data-aos-duration='3000'data-aos-delay='2000'src={Twopac} alt="#" />
                <img className='position-abs d-none d-xl-block'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000' src={RM_LINE} alt="#" />
            </Col>
            <Col xl={8} className='mt-5'>
                <div className='d-flex align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                    <span className='yellow-circle abs-Y1'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'></span>
                    <a className='position-abs1 d-none d-xl-block' href="#"><Roadmap1/></a>
                    
                    <div className='ms-0 ms-xl-4 ps-0 ps-xl-3'><h2 className='Box_RM'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'>20%</h2></div>
                   <div className='ps-5'data-aos='fade-left'data-aos-duration='2000'data-aos-delay='2000'>
                    <h2 className='text_ffffff fw-normal ff_Azo_Sans_Uber fs_xmd'>Phase 1</h2>
                    <p className='text_ffffff fs_xsm fw-normal ff_montserrat'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                    </div>
                </div>

                <div className='d-flex align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                <span className='yellow-circle abs-Y2'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'></span>
                  <a className='position-abs2 d-none d-xl-block' href="#"><Roadmap2/></a>
                    <div className='ps-0 ps-xl-5 ms-xl-4 ms-0'><h2 className='Box_RM ms-0 ms-xl-2'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'>40%</h2></div>
                  <div  className='ps-5'data-aos='fade-left'data-aos-duration='2000'data-aos-delay='2000'>
                 <h2 className='text_ffffff fw-normal ff_Azo_Sans_Uber fs_xmd'>Phase 2</h2>
                 <p className='text_ffffff fs_xsm fw-normal ff_montserrat'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                  </div>
                 </div>

                 <div className='d-flex align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                 <span className='yellow-circle abs-Y3'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'></span>
                   <a className='position-abs3 d-none d-xl-block' href="#"><Roadmap3/></a>
                    <div className='ps-0 ps-xl-5 ms-xl-5 ms-0'><h2 className='Box_RM ms-xl-5 ms-0'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'>60%</h2></div>
                <div  className='ps-5'data-aos='fade-left'data-aos-duration='2000'data-aos-delay='2000'>
                 <h2 className='text_ffffff fw-normal ff_Azo_Sans_Uber fs_xmd'>Phase 3</h2>
                 <p className='text_ffffff fs_xsm fw-normal ff_montserrat'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                 </div>
                 </div>

                 <div className='d-flex align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                 <span className='yellow-circle abs-Y4'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'></span>
                    <a className='position-abs4 d-none d-xl-block' href="#"><Roadmap4/></a>
                    <div className='ps-xl-5 ps-0 ms-xl-4 ms-0'><h2 className='Box_RM ms-0 ms-xl-0'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'>80%</h2></div>
                <div  className='ps-5'data-aos='fade-left'data-aos-duration='2000'data-aos-delay='2000'>
                 <h2 className='text_ffffff fw-normal ff_Azo_Sans_Uber fs_xmd'>Phase 4</h2>
                 <p className='text_ffffff fs_xsm fw-normal ff_montserrat'>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                 </div>
                 </div>

                 <div className='d-flex align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                 <span className='yellow-circle abs-Y5'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'></span>
                 <a className='position-abs5 d-none d-xl-block' href="#"><Roadmap5/></a>
                    <div className='ms-xl-4 ms-0 ps-xl-3 ps-0'><h2 className='Box_RM'data-aos='zoom-in'data-aos-duration='3000'data-aos-delay='2000'>100%</h2></div>
                <div  className='ps-5'data-aos='fade-left'data-aos-duration='2000'data-aos-delay='2000'>
                 <h2 className='text_ffffff fw-normal ff_Azo_Sans_Uber fs_xmd'>Phase 5</h2>
                 <p className='text_ffffff fs_xsm fw-normal ff_montserrat'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                 </div>
                 </div>

            </Col>
         </Row>
         <div className='d-flex justify-content-center mt-5'>
         <button className='BUTTON-Y'> Read Our Whitepaper</button>
         </div>
    </Container>
   </section>
  )
}

export default Roadmap