import { FaCartShopping, FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="bg-black flex justify-between items-center px-5 fixed w-full top-0 z-10">
                {/* Logo */}
                <ul className="text-white flex justify-between items-center">
                    <li>
                        <NavLink to="./home">
                            <img className="w-20 min-w-20" src={logo} alt="Logo" />
                        </NavLink>
                    </li>
                </ul>



                {/* Menu links */}
                <ul className={`text-white flex-col md:flex-row md:flex md:gap-6 gap-3 ${isOpen ? 'flex' : 'hidden'} md:block`}>
                    <li>
                        <NavLink to="./home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="./Gallery">Gallery</NavLink>
                    </li>
                    <li className="relative group">
                        <NavLink to="./artists">Artists</NavLink>
                        {/* Submenú Artists*/}
                        <ul className="absolute w-52 h-auto left-0 top-120 hidden bg-black group-hover:flex group-hover:flex-col group-hover:justify-center group-hover:items-center">
                            <li className="w-36 h-6 mx-2 mb-3"><NavLink to="./faq">Artists Catlogue</NavLink></li>
                            <li className="w-36 h-6 mx-2 mb-3"><NavLink to="./faq">Become an Artists</NavLink></li>
                            <li className="w-36 h-6 mx-2 mb-3"><NavLink to="./faq">Commissions</NavLink></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <NavLink to="./about-us">About</NavLink>
                        {/* Submenú About*/}
                        <ul className="absolute w-52 h-auto left-0 top-120 hidden bg-black group-hover:flex group-hover:flex-col group-hover:justify-center group-hover:items-center">
                            <li className="w-36 h-6 mx-2 mb-3"><NavLink to="./faq">FAQ</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="./contact">Contact</NavLink>
                    </li>
                </ul>

                {/* Social Icons */}
                <ul className={`text-white flex-col md:flex-row md:flex md:gap-6 gap-3 ${isOpen ? 'flex' : 'hidden'} md:block`} >
                    <li>
                        <NavLink to="#"><FaFacebook /></NavLink>
                    </li>
                    <li>
                        <NavLink to="#"><FaInstagram /></NavLink>
                    </li>
                    <li>
                        <NavLink to="#"><FaYoutube /></NavLink>
                    </li>
                    <li>
                        <NavLink to="#"><FaLinkedinIn /></NavLink>
                    </li>
                    <li>
                        <NavLink><FaCartShopping /></NavLink>
                    </li>
                    <li>
                        <NavLink to="./donate">DONATE</NavLink>
                    </li>
                </ul>

                {/* Hamburger Menu for small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <span className="text-white">&#9776;</span> {/* Icono de menú */}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
