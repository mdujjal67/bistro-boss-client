import { Helmet } from "react-helmet-async";
import CoverContent from "../../Shared/CoverContent/CoverContent";
import menuImg from "../../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div className="pb-[100px]">
            <Helmet>
                <title>Our Menu</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <CoverContent img={menuImg} title="our menu" content="Would you like to try a dish?"></CoverContent>
        </div>
    );
};

export default Menu;