import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect (() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    },[])
    return (
        <section className="mb-[100px]">
            <SectionTitle
                heading ="from our menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item = {item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;