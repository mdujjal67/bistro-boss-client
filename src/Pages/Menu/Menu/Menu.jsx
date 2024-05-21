import { Helmet } from "react-helmet-async";
import CoverContent from "../../Shared/CoverContent/CoverContent";
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        
        <div className="">
            <Helmet>
                <title>Our Menu</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <CoverContent img={menuImg} title="our menu" content="Would you like to try a dish?"></CoverContent>
        </div>
    );
};

export default Menu;