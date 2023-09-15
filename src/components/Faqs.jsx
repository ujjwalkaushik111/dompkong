import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import frame1 from '../assets/img/png/twitter-circle.png'
import frame2 from '../assets/img/png/icons_opensea.png'
import frame3 from '../assets/img/png/icons_Diamond.png'
import frame4 from '../assets/img/png/icons_discord.png'
import frame5 from '../assets/img/png/medium-circle.png'
import frame6 from '../assets/img/png/icons_telegram.png'

const Faqs = () => {
  return (
    <section className='bg-black FAQS_BG'>
        <Container>
        <h2 className="text-center fw-normal fs_xl ff_Azo_Sans_Uber text_ffffff py-5" data-aos='zoom-in'data-aos-duration='3000' data-aos-delay='1000'>FAQS</h2>
        <div className='d-flex justify-content-center'>
                    <Accordion defaultActiveKey="0" className='width-967'>
                        <Accordion.Item eventKey="0" className='w-100 bg-transparent'>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Arcu faucibus diam feugiat magna etiam.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_xsm fw-normal ff_montserrat bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='w-100 bg-transparent'>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Fermentum tortor aenean.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_xsm fw-normal ff_montserrat bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='w-100 bg-transparent'>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Dictum est amet sollicitudin.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_xsm fw-normal ff_montserrat bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='w-100 bg-transparent'>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Sed vulputate mi faucibus.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_xsm fw-normal ff_montserrat bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='w-100 bg-transparent '>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Commodo placerat ultricies. </Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_xsm fw-normal ff_montserrat bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='w-100 bg-transparent '>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Nunc amet cursus morbi donec. </Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_xsm fw-normal ff_montserrat bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                            
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
            <div className='d-flex justify-content-center align-items-center gap-4 margin-top pt-5 mb-3'data-aos='fade-down'data-aos-duration='3000' data-aos-delay='1000'>
               <a href="http://twitter"><img className='link' src={frame1} alt="#" /></a>
                <a href="http://twitter"><img className='link' src={frame2} alt="#" /></a>
                <a href="http://diamond"><img className='link' src={frame3} alt="#" /></a>
                <a href="http://discord"><img className='link' src={frame4} alt="#" /></a>
               <a href="https://medium.com/"><img className='link' src={frame5} alt="#" /></a>
               <a href="http://telegram"><img className='link' src={frame6} alt="#" /></a>
            </div>
            <div className='pb-5'><hr className='hr_line' /></div>
            

    </section>
  )
}

export default Faqs