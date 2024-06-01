import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlinePayment, MdReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard content */}
            <div className="w-64 bg-orange-400 min-h-screen mr-5">
                <ul className="menu p-4">
                    {
                        isAdmin ? 
                        <>
                          <li className="">
                        <NavLink to='/dashboard/adminHome'>
                        <FaHome className="text-lg"/>
                            Admin Home</NavLink>
                    </li>
                    <li className="my-3">
                        <NavLink to='/dashboard/addItems'>
                        <FaUtensils className="text-lg"/>
                            Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems'>
                        <FaList className="text-lg"/>
                            Manage Items</NavLink>
                    </li>
                    <li className="my-3">
                        <NavLink to='/dashboard/manageBookings'>
                        <FaBook className="text-lg"/>
                            Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/allUsers'>
                        <FaUsers className="text-lg"/>
                            All Users</NavLink>
                    </li>  
                        </> : 
                        <>
                        <li className="">
                        <NavLink to='/dashboard/userHome'>
                        <FaHome className="text-lg"/>
                            User Home</NavLink>
                    </li>
                    <li className="my-3">
                        <NavLink to='/dashboard/reservation'>
                        <FaCalendar className="text-lg"/>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/paymentHistory'>
                        <MdOutlinePayment className="text-lg"/>
                            Payment History</NavLink>
                    </li>
                    <li className="my-3">
                        <NavLink to='/dashboard/cart'>
                        <FaShoppingCart className="text-lg"/>
                            My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addReview'>
                        <MdReviews className="text-lg"/>
                            Add Review</NavLink>
                    </li>
                    <li className="mt-3">
                        <NavLink to='/dashboard/myBooking'>
                        <SlCalender className="text-lg"/>
                            My Booking</NavLink>
                    </li>
                        </>
                    }
                    

                    <div className="divider"></div>
                    {/* shared components */}
                    <li className="mt-3">
                        <NavLink to='/'>
                        <FaHome className="text-lg"/>
                            Home</NavLink>
                    </li>
                    <li className="mt-3">
                        <NavLink to='/menu'>
                        <FaSearch className="text-lg"/>
                            Menu</NavLink>
                    </li>
                    <li className="mt-3">
                        <NavLink to='/contact'>
                        <FaEnvelope className="text-lg"/>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* sidebar content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;