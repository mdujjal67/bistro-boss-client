import PropType from "prop-types"
const FoodCard = ({ item }) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-4">
                <figure><img src={image} alt="item" className="rounded-lg relative"/></figure>
                <p className="bg-gray-900 px-2 py-1 w-16 absolute top-10 right-10 text-white rounded-md">${price}</p>
                <div className="card-body">
                    <h2 className="card-title text-center">{name}</h2>
                    <p className="text-left">{recipe.substring(0, 70)}</p>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-primary bg-[#E8E8E8] text-[#BB8506] border-0 hover:border-b-2 hover:border-[#BB8506] hover:bg-[#111827]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropType.object,
}
export default FoodCard;