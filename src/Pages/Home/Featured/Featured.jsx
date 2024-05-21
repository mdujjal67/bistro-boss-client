import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
    return (
        <div className="mb-[100px] featured-item py-[100px]">
            <section className="">
                <SectionTitle
                    subHeading="Check it out"
                    heading="from our menu"
                    color={"text-white"}
                ></SectionTitle>
                <div className="md:flex gap-4 md:gap-16 items-center justify-center">
                    <div>
                        <img src={featuredImg} alt="" className="w-[650px]" />
                    </div>
                    <div className="w-[600px] text-white">
                        <p>March 20, 2023</p>
                        <p className="uppercase my-1">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ab, rem assumenda veritatis enim est     quo. Ad, cupiditate officiis ea ratione veniam atque earum corporis modi libero iste inventore soluta ipsa voluptas asperiores quo aspernatur eius labore quibusdam ab unde.</p>
                        <button className="btn btn-outline mt-6 font-semibold border-white text-white border-0 border-b-2 hover:bg-white hover:text-gray-800 hover:border-white">Read More</button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Featured;