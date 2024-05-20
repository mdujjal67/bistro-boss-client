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

const Category = () => {
    return (
        <div className='pb-[100px]'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" className='w-[400px]'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-20 mb-5'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" className='w-[400px]'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-20 mb-5'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" className='w-[400px]'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-20 mb-5'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" className='w-[400px]'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-20 mb-5'>deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" className='w-[400px]'/>
                    <h3 className='text-3xl text-white uppercase text-center -mt-20 mb-5'>salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;