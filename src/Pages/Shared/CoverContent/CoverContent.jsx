import PropType from "prop-types"
import { Parallax } from 'react-parallax';

const CoverContent = ({ img, title, content }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
                style={{ height: '700px' , backgroundSize: 'cover' , marginBottom: '100px'}}>

                <div className="hero h-[700px]  ">
                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-[#15151599] py-[130px] px-[300px]">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 font-semibold text-lg">{content}</p>
                    </div>
                </div>
            </div>
            </Parallax>
            
        </div>
    );
};

CoverContent.propTypes = {
    img: PropType.object,
    title: PropType.object,
    content: PropType.object
}
export default CoverContent;