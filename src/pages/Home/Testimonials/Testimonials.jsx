import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='w-10/12 mx-auto'>
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            <div className='py-5'>
                <Swiper

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >

                            <div className='w-10/12 mx-auto text-center '>

                                <div className='flex  flex-col justify-center items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <FaQuoteLeft className='text-5xl my-4'></FaQuoteLeft>

                                </div>

                                <p>{review.details}</p>
                                <h3 className='text-xl uppercase font-medium text-[#CD9003] p-2'>{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }


                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;