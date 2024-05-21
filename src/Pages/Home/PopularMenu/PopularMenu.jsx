// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([])
    // useEffect (() => {
    //     fetch("menu.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems);
    //     })
    // },[])
    return (
        <section className="mb-[100px]">
            <SectionTitle
                heading ="from our menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item = {item}
                    ></MenuItem>)
                }
            </div>
            <div className="mx-auto text-center">
            <button className="btn btn-outline mt-12 font-semibold border-gray-800  text-gray-900 border-0 border-b-2  ">Read More</button>
            </div>

        </section>
    );
};

export default PopularMenu;