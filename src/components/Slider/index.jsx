// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


// importar slider
import slider1 from "../../assets/galeria/11.1.png";
import slider2 from "../../assets/galeria/7.1.png";
import slider3 from "../../assets/galeria/15.1.png";
import logo from "../../assets/images/logo.png"

import "./styles.css"


const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            parallax={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect="fade"
            className="mySwiper"
        >
            <SwiperSlide data-swiper-parallax="-500">
                <div className="slide flex flex-col items-center" style={{ backgroundImage: `url(${slider1})` }}>
                    <img src={logo} alt="" />
                    <h1>CHUPACABRAS</h1>
                    <h2>STUDIO GALLERY</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide data-swiper-parallax="-500">
                <div className="slide flex flex-col items-center" style={{ backgroundImage: `url(${slider2})` }}>
                    <img src={logo} alt="" />
                    <h1>CHUPACABRAS</h1>
                    <h2>STUDIO GALLERY</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide data-swiper-parallax="-500">
                <div className="slide flex flex-col items-center" style={{ backgroundImage: `url(${slider3})` }}>
                    <img src={logo} alt="" />
                    <h1>CHUPACABRAS</h1>
                    <h2>STUDIO GALLERY</h2>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider