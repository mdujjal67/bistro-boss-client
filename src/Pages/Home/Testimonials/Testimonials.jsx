import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

// import react rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="mb-[100px]">
            <SectionTitle
                subHeading="What Our Client Say"
                heading="testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        review={review}>
                        <div className="w-[1080px] mx-auto">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly className="mx-auto mb-4"/>
                            <p>{review.details}</p>
                            <h2 className="text-2xl font-semibold text-[#CD9003] text-center pt-2 uppercase">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;