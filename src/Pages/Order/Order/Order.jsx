import { Helmet } from "react-helmet-async";
import CoverContent from "../../Shared/CoverContent/CoverContent";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
// import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <CoverContent img={orderImg} title="our Shop" content="Would you like to try a dish?"></CoverContent>

            {/*react tabs for sorting */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className=" text-center">
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;