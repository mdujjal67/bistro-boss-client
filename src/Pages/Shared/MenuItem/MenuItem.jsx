import PropType from "prop-types"
const MenuItem = ({item}) => {
    const {image, recipe, name, price} = item
    return (
        <div className="flex items-center space-x-3 md:space-x-8">
            <img style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" className="w-[110px] rounded-full"/>
            <div>
                <h3>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};
MenuItem.propTypes ={
    item: PropType.object,
}
export default MenuItem;