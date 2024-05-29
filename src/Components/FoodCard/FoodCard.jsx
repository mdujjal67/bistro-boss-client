import PropType from "prop-types"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const FoodCard = ({ item }) => {
    const {user} = useContext(AuthContext)
    const {name, image, price, recipe, _id} = item;
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = food => {
        if(user && user.email){
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };
            axios.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name}, added to the cart`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "You'r not login!",
                text: "Please login to add the item to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-4">
                <figure><img src={image} alt="item" className="rounded-lg relative"/></figure>
                <p className="bg-gray-900 px-2 py-1 w-16 absolute top-10 right-10 text-white rounded-md">${price}</p>
                <div className="card-body">
                    <h2 className="card-title text-center">{name}</h2>
                    <p className="text-left">{recipe.substring(0, 70)}</p>
                    <div className="card-actions justify-center mt-5">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary bg-[#E8E8E8] text-[#BB8506] border-0 hover:border-b-2 hover:border-[#BB8506] hover:bg-[#111827]">Add To Cart</button>
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