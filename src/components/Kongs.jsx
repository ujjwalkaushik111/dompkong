import React from 'react'
import { Container } from 'react-bootstrap'
import kong from '../assets/img/webp/real_kongs.webp'
import LEFT_MONKEY_1 from '../assets/img/webp/Hugh.webp'
import LEFT_MONKEY_2 from '../assets/img/webp/Rambo.webp'
import LEFT_MONKEY_3 from '../assets/img/webp/Albert.webp'
import LEFT_MONKEY_4 from '../assets/img/webp/Prince.webp'
import LEFT_MONKEY_5 from '../assets/img/webp/Royals.webp'
import RIGHT_MONKEY_1 from '../assets/img/webp/He-Man.webp'
import RIGHT_MONKEY_2 from '../assets/img/webp/Anonymous.webp'
import RIGHT_MONKEY_3 from '../assets/img/webp/Twopac.webp'
import RIGHT_MONKEY_4 from '../assets/img/webp/Elvis.webp'
import Change_1 from '../assets/img/webp/Change1.webp'
import Change_2 from '../assets/img/webp/Change2.webp'
import Change_3 from '../assets/img/webp/Change3.webp'
import Change_4 from '../assets/img/webp/Change4.webp'
import Change_5 from '../assets/img/webp/Change5.webp'
import Change_6 from '../assets/img/webp/Change6.webp'
import Change_7 from '../assets/img/webp/Change7.webp'
import Change_8 from '../assets/img/webp/Change8.webp'
import Change_9 from '../assets/img/webp/Change9.webp'
import Slider from 'react-slick'
import $ from 'jquery'

const Kongs = () => {
    $(function () {
        $("#big-image img:eq(0)").nextAll().hide();
        $(".small-images img").click(function (e) {
          var index = $(this).index();
          $("#big-image img").eq(index).show().siblings().hide();
        });
      });
      var up_kong = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        cssEase: "linear",
        pauseOnHover: false,
        speed: 2500,
        autoplaySpeed: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
        ],
      }
      var down_kong = {
        dots: false,
        arrows: false,
        rtl: true,
        autoplay: true,
        infinite: true,
        cssEase: "linear",
        pauseOnHover: false,
        speed: 2500,
        autoplaySpeed: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
        ]
      }

    return (
        <section className='py-5 bg-black position-relative'>
          <Container className='mb-5 pb-5'>
            <div className='d-xl-block d-none small-images'>
              <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500" className='LEFT_MONKEY1_abs  img z-3' src={LEFT_MONKEY_1} alt="kongs" />
              <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="800" className='LEFT_MONKEY2_abs  img z-3' src={LEFT_MONKEY_2} alt="kongs" />
              <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1200" className='LEFT_MONKEY3_abs  img z-3' src={LEFT_MONKEY_3} alt="kongs" />
              <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1500" className='LEFT_MONKEY4_abs  img z-3' src={LEFT_MONKEY_4} alt="kongs" />
              <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1800" className='LEFT_MONKEY5_abs  img zindex' src={LEFT_MONKEY_5} alt="kongs" />
              <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500" className='RIGHT_MONKEY1_abs  img z-3' src={RIGHT_MONKEY_1} alt="kongs" />
              <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="800" className='RIGHT_MONKEY2_abs  img z-3' src={RIGHT_MONKEY_2} alt="kongs" />
              <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1200" className='RIGHT_MONKEY3_abs  img z-3' src={RIGHT_MONKEY_3} alt="kongs" />
              <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1500" className='RIGHT_MONKEY4_abs  img z-3' src={RIGHT_MONKEY_4} alt="kongs" />
              <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1800" className='RIGHT_MONKEY5_abs  img z-3' src={LEFT_MONKEY_1} alt="kongs" />
            </div>
            <div className='mb-5 pb-5 position-relative z-2'>
              <h2 className='ff_Azo_Sans_Uber fw-normal fs_xl text_ffffff text-center mb-xl-0 mb-5' data-aos="fade-up" data-aos-duration="2000">THE KONGS</h2>
              <Slider {...up_kong} className='d-xl-none d-block'>
                <div><img className='LEFT_MONKEY1_abs img' src={LEFT_MONKEY_1} alt="kongs" /></div>
                <div><img className='LEFT_MONKEY2_abs img' src={LEFT_MONKEY_2} alt="kongs" /></div>
                <div><img className='LEFT_MONKEY3_abs img' src={LEFT_MONKEY_3} alt="kongs" /></div>
                <div><img className='LEFT_MONKEY4_abs img' src={LEFT_MONKEY_4} alt="kongs" /></div>
                <div><img className='LEFT_MONKEY5_abs img' src={LEFT_MONKEY_5} alt="kongs" /></div>
              </Slider>
              <div id='big-image' className='d-flex  justify-content-center align-items-center mb-xl-5 pb-xl-5 ' data-aos="zoom-in" data-aos-duration="2000">
                <img className='width_md_100 big-image' src={kong} alt="kong" />
                <img className='width_md_100 big_image' src={Change_2} alt="kong" />
                <img className='width_md_100 big_image' src={Change_3} alt="kong" />
                <img className='width_md_100 big_image' src={Change_4} alt="kong" />
                <img className='width_md_100 big_image' src={Change_5} alt="kong" />
                <img className='width_md_100 big_image' src={Change_6} alt="kong" />
                <img className='width_md_100 big_image' src={Change_7} alt="kong" />
                <img className='width_md_100 big_image' src={Change_8} alt="kong" />
                <img className='width_md_100 big_image' src={Change_9} alt="kong" />
                <img className='width_md_100 big_image' src={Change_1} alt="kong" />
              </div>
                <div className="kong_ellipse"></div>
            </div>
          
            <Slider {...down_kong} className='d-xl-none d-block'>
              <div><img className='RIGHT_MONKEY1_abs img' src={RIGHT_MONKEY_1} alt="kongs" /></div>
              <div><img className='RIGHT_MONKEY2_abs img' src={RIGHT_MONKEY_2} alt="kongs" /></div>
              <div><img className='RIGHT_MONKEY3_abs img' src={RIGHT_MONKEY_3} alt="kongs" /></div>
              <div><img className='RIGHT_MONKEY4_abs img' src={RIGHT_MONKEY_4} alt="kongs" /></div>
              <div><img className='RIGHT_MONKEY5_abs img' src={LEFT_MONKEY_1} alt="kongs" /></div>
            </Slider>
          </Container>
        </section>
      )
}

export default Kongs