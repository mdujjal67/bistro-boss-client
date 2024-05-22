import { Helmet } from "react-helmet-async";
import CoverContent from "../../Shared/CoverContent/CoverContent";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
// import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        
        <div className="mb-[100px]">
            <Helmet>
                <title>Our Menu</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <CoverContent img={menuImg} title="our menu" content="Would you like to try a dish?"></CoverContent>

            {/* main cover */}
            <SectionTitle
                heading="Today's Offer"
                subHeading="Don't miss"
            ></SectionTitle>

            {/* offered menu items */}
            <MenuCategory item={offered}></MenuCategory>

            {/* desserts menu items */}
            <MenuCategory item={desserts} title="Desserts" img={dessertImg}></MenuCategory>

            {/* pizzas menu items */}
            <MenuCategory item={pizza} title="Pizza" img={pizzaImg}></MenuCategory>

            {/* salads menu items */}
            <MenuCategory item={salad} title="Salads" img={saladImg}></MenuCategory>

            {/* soups menu items */}
            <MenuCategory item={soup} title="Soups" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;