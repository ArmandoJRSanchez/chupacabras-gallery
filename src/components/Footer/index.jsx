import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer id="footer" className="w-full h-80 flex flex-col items-center justify-center">
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-screen-lg">
                <li>
                    <NavLink className="underline hover:text-stone-700" to="./contact">CONTACT US</NavLink>
                </li>
                <li>
                    <NavLink className="underline hover:text-stone-700" to="./privacy">PRIVACY POLICY</NavLink>
                </li>
                <li>
                    <NavLink className="underline hover:text-stone-700" to="./terms-of-use">TERMS OF USE</NavLink>
                </li>
                <li>
                    <NavLink className="underline hover:text-stone-700" to="./faq">FAQ</NavLink>
                </li>
            </ul>

            <h4 className="mt-6 text-center text-sm sm:text-base flex flex-col sm:flex-row items-center gap-2">
                © {date} Chupacabras Studio Gallery. All rights reserved. Designed by Asicom Graphics
                <FaHeart className="text-red-600" />
            </h4>
        </footer>
    );
};

export default Footer;
