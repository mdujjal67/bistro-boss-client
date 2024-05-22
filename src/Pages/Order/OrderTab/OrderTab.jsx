import FoodCard from "../../../Components/FoodCard/FoodCard";
import PropType from "prop-types"
const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 mb-[100px]">
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                >
                </FoodCard>)
            }
        </div>
    );
};
OrderTab.propTypes = {
    items: PropType.object,

}
export default OrderTab;