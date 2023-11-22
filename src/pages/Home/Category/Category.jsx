import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const Category = () => {
    return (
      <section>
<SectionTitle
 heading={'ORDER ONLINE'} 
 subHeading={'From 11:00am to 10:00pm'}
 >


</SectionTitle>
<Swiper
        slidesPerView={4}
        spaceBetween={25}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-20 "
      >
        <SwiperSlide><img src={slide1} alt="" /> <h2 className='uppercase text-white text-2xl font-semibold shadow-inner -mt-16'>Salads</h2></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /> <h2 className='uppercase text-white text-2xl font-semibold -mt-16'> pizzas</h2></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /> <h2 className='uppercase text-white text-2xl font-semibold -mt-16'>Soups</h2></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /> <h2 className='uppercase text-white text-2xl font-semibold -mt-16'>desserts</h2></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /> <h2 className='uppercase text-white text-2xl font-semibold -mt-16'>Salads</h2></SwiperSlide>
      
        
      </Swiper>
      </section>
    );
};

export default Category;