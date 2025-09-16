import { Link, NavLink } from "react-router";
import { BsArrowUpLeftCircleFill } from "react-icons/bs";
import Logo from "../../../public/Friendly Wordmark Logo for Easy Drop.png"

const NavBar = () => {

    const navLinks = <>
        <li><NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-emerald-400 text-black" : ""
            } to="/">
            Services
        </NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-emerald-400 text-black" : ""
        } to="/coverage">Coverage</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-emerald-400 text-black" : ""
        } to="/about">About Us</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-emerald-400 text-black" : ""
        } to="pricing">Pricing</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-emerald-400 text-black" : ""
        } to="/rider">Be a Rider</NavLink></li>


    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-20 hidden md:flex h-16 " src={Logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn btn-outline"><Link>Sign In</Link></button>
                <button className="btn btn-success"><Link>Be A Rider </Link></button>
                <span className="text-4xl mb-5 -ml-5 text-emerald-400"><BsArrowUpLeftCircleFill />
                </span>
            </div>
        </div>
    );
};

export default NavBar;