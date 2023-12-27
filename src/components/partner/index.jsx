import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";
import img1 from '../../assets/custom Images/brand1.png'
import img2 from '../../assets/custom Images/brand2.png'
import img3 from '../../assets/custom Images/brand3.png'
import img4 from '../../assets/custom Images/brand4.png'
import img5 from '../../assets/custom Images/brand5.png'
import img6 from '../../assets/custom Images/brand6.png'
Partner.propTypes = {};

function Partner(props) {
  const { data } = props;

const dataPartner = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },
    {
        id: 5,
        img: img5
    },
    {
        id: 6,
        img: img6
    },
    {
        id: 7,
        img: img1
    },
    {
        id: 8,
        img: img2
    },
    {
        id: 9,
        img: img3
    },
    {
        id: 10,
        img: img4
    },
]

  return (
    <section>
      <div className="wd-partner">
        <div className="tf-container">
          <h1 className="title-partner">
            Over 100,000 recruiters use Jobtex to modernize their hiring
          </h1>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={68.95}
            slidesPerView={6}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            className="partner-type-6"
            loop={true}
            speed={3000}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              500: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1600: {
                slidesPerView: 6,
              },
            }}
          >
            {dataPartner.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to="#" className="logo-partner">
                  <img src={item.img} alt="Jobtex" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Partner;
