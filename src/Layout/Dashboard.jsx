import { FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdOutlinePayment, MdReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard content */}
            <div className="w-64 bg-orange-400 min-h-full">
                <ul className="menu p-4">
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
                            My Cart</NavLink>
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

                    <div className="divider"></div>
                    
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