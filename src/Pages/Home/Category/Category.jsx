import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../../src/App.css';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='pb-[100px]'>
            <SectionTitle
            subHeading={"From 11:00 am to 10:00 pm"}
            heading={"Order Online"}
            >
            </SectionTitle>
            <Swiper
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    }
                }}
                // spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" className='w-[400px] mx-auto'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-24 mb-10'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" className='w-[400px] mx-auto'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-24 mb-10'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" className='w-[400px] mx-auto'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-24 mb-10'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" className='w-[400px] mx-auto'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-24 mb-10'>deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" className='w-[400px] mx-auto'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-24 mb-10'>salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;