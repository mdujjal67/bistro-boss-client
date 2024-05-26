import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navOptions = <>
        <li className="font-semibold hover:text-yellow-400 lg:text-white text-gray-700"><NavLink to="/">HOME</NavLink></li>
        <li className="font-semibold hover:text-yellow-400 lg:text-white text-gray-700 mx-2"><NavLink to="/">CONTACT US</NavLink></li>
        <li className="font-semibold hover:text-yellow-400 lg:text-white text-gray-700"><NavLink to="/">DASHBOARD</NavLink></li>
        <li className="font-semibold hover:text-yellow-400 lg:text-white text-gray-700 mx-2"><NavLink to="/menu">OUR MENU</NavLink></li>
        <li className="font-semibold hover:text-yellow-400 lg:text-white text-gray-700"><NavLink to="/order/salads">OUR SHOP</NavLink></li>
        <li className="font-semibold hover:text-yellow-400 lg:text-white text-gray-700"><NavLink to="/login">LOGIN</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-40 text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;