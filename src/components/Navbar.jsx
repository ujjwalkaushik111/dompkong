import React from 'react'
import { Container } from 'react-bootstrap'
import Twitter from '../assets/img/png/Yellow_twitter.png'
import Ship from '../assets/img/png/ship_icon.png'
import Diamond from '../assets/img/png/Diamond_icon.png'
import Discord from '../assets/img/png/Discord.png'
import Medium from '../assets/img/png/medium-circle2.png'
import Telegram from '../assets/img/png/telegram2.png'
import Two_pac from '../assets/img/png/Two_pac.png'
import Chita from '../assets/img/png/Prince_chita.png'
import Albert_hero from '../assets/img/png/Albert_hero.png'


const Navbar = () => {
  return (
    <section className='Hero_bg overflow-hidden py-0 py-xl-5'>
        <Container className='position-relative z-1'>
          <div className='d-flex justify-content-end pt-4'>
            <button className='BUTTON-Y'data-aos='fade-left'data-aos-duration='2000'data-aos-delay='3000'>cONNECT wALLET</button>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-4 pt-2'data-aos='fade-right'data-aos-duration='2000'data-aos-delay='3000'>
            <a href="http://Twitter.com"><img src={Twitter} alt="#" /></a>
           <a href="http://Twitter.com"> <img src={Ship} alt="#" /></a>
           <a href="http://Twitter.com"> <img src={Diamond} alt="#" /></a>
           <a href="http://discord.com"> <img src={Discord} alt="#" /></a>
           <a href="http://Twitter.com"> <img src={Medium} alt="#" /></a>
            <a href="http://telegram.com"><img src={Telegram} alt="#" /></a>
          </div>
          <div className='mt-5 position-relative z-1'>
            <div className='' data-aos='fade-down' data-aos-duration='2000'data-aos-delay="3000">
            <h1 className='text_ffffff fs_xl ff_Azo_Sans_Uber fw-normal text-center mb-4'>WELCOME <span className='d-block'></span>TO <span className='text_F1C85D abs-dompkong'>DomPKong</span></h1>
            <p className='fs_xsm ff_montserrat text_ffffff fw-normal text-center'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. <span className='d-block'> Erat nam molestie. Vita</span></p>
            </div>
            <div className='d-flex align-items-center gap-4 justify-content-center flex-lg-row flex-column'data-aos='fade-up' data-aos-duration='2000'data-aos-delay="3000">
              <button className='BUTTON-Y'>Whitepaper</button>
              <button className='BUTTON-Y'>Mint</button>
              <button className='BUTTON-Y'>Opensea</button>
            </div>
          </div>
            <div className="d-flex justify-content-end py-100 z-n1 ">
                <img className='w-80 ABS_TOW  d-xl-block d-none' src={Two_pac} alt="#" />
                <img className='w-90 ABS_CHITA  d-xl-block d-none' src={Chita} alt="#" />
                <img className='w-80 ABS_HERO  d-xl-block d-none' src={Albert_hero} alt="#" />
            </div>
        </Container>
        <div className="d-flex align-items-end py-100 d-xl-none">
                <div className='ABS_TOW'><img className='w-100 ' src={Two_pac} alt="#" /></div>
                <div className='ABS_CHITA'><img className='w-100 ' src={Chita} alt="#" /></div>
                <div className='ABS_HERO'><img className='w-100 ' src={Albert_hero} alt="#" /></div>
            </div>
    </section>
  )
}

export default Navbar