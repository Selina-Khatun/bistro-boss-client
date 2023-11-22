import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';
const Featured = () => {
    return (
        <section className='my-10 featured-item bg-fixed p-10 relative inset-0'>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='z-50 relative text-white '>
                <SectionTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                    // className='text-white menu'
                ></SectionTitle>
                <div className='flex justify-center items-center w-4/5 mx-auto '>
                    <div className=' flex justify-around items-end text-end'>
                        <img className='w-2/3 ' src={featuredImg} alt="" />
                    </div>
                    <div className='text-left justify-center text-white items-center'>
                        <p>March 20, 2023</p>
                        <p className='py-1 '>WHERE CAN I GET SOME?</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        {/* <button
                            class="  tracking-wide text-white uppercase my-2 text-sm font-bold rounded border-b-2 border-white hover:border-red-500 hover:bg-white hover:text-black shadow-md py-2 px-6 inline-flex items-center">
                            <span class="mx-auto ">Read More</span>
                        </button> */}
                        <button className='btn btn-outline border-0 border-b-2 text-white uppercase my-2'>read more</button>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;