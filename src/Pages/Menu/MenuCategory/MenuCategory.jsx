import { Link } from "react-router-dom";
import CoverContent from "../../Shared/CoverContent/CoverContent";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropType from "prop-types"
const MenuCategory = ({ item, img, title }) => {
    return (
        <div className="mb-12">
            {title && <CoverContent img={img} title={title} content="Would you like to try a dish?"></CoverContent>}
            <div className="grid md:grid-cols-2 gap-6">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className=" text-center ">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline mt-12 font-semibold border-gray-800  text-gray-900 border-0 border-b-2  ">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};
MenuCategory.propTypes = {
    item: PropType.object,
    img: PropType.object,
    title: PropType.object,
}
export default MenuCategory;