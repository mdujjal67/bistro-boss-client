import { Helmet } from "react-helmet-async";
import CoverContent from "../../Shared/CoverContent/CoverContent";
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        
        <div className="">
            <Helmet>
                <title>Our Menu</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <CoverContent img={menuImg} title="our menu" content="Would you like to try a dish?"></CoverContent>
            <PopularMenu></PopularMenu>
            <CoverContent img={menuImg} title="our menu" content="Would you like to try a dish?"></CoverContent>
            <PopularMenu></PopularMenu>
            <CoverContent img={menuImg} title="our menu" content="Would you like to try a dish?"></CoverContent>
            <PopularMenu></PopularMenu>
            <CoverContent img={menuImg} title="our menu" content="Would you like to try a dish?"></CoverContent>
            <PopularMenu></PopularMenu>
            <CoverContent img={menuImg} title="our menu" content="Would you like to try a dish?"></CoverContent>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;