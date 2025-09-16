import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Logo from "../../../public/Friendly Wordmark Logo for Easy Drop.png"

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content p-10">
            <aside>
                <img className="w-32" src={Logo} alt="" />
                <p className="font-bold -mt-5">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
                </p>
            </aside>
            <nav>
                <div className="menu menu-horizontal px-1 overline -mt-8">
                    <ul className="flex flex-col md:flex-row">
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/coverage">Coverage</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/rider">Be a Rider</Link></li>
                    </ul>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-3xl text-blue-600" href="https://www.facebook.com/"><FaFacebook />
                    </a>
                    <a className="text-3xl text-rose-700" href="https://www.instagram.com/"><FaInstagram />
                    </a>
                    <a className="text-3xl" href="https://twitter.com/"><FaSquareXTwitter />
</a>
                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </nav>
        </footer>
    );
};

export default Footer;