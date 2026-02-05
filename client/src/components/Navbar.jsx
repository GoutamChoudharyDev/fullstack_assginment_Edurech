import { useState } from "react";
import { Link } from "react-router-dom";

// React icons
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-cyan-600 p-4 rounded-2xl mt-3 fixed top-0 left-1/2 transform -translate-x-1/2 w-[92%] z-50">
            <div className="container mx-auto flex items-center">

                {/* Logo (Left) */}
                <div className="flex-1">
                    <Link
                        to="/"
                        className="text-white lg:text-2xl md:text-xl font-extrabold tracking-wide"
                    >
                        <span>
                            <span className="text-red-500">Nex</span>
                            <span>Tech</span>
                        </span>
                    </Link>
                </div>

                {/* Menu Items (Center) */}
                <div className="hidden md:flex flex-1 justify-center space-x-8 text-white font-medium">
                    <Link to="/home" className="hover:text-yellow-400">Home</Link>
                    <Link to="/about" className="hover:text-yellow-400">About</Link>
                    <Link to="/careers" className="hover:text-yellow-400">Careers</Link>
                    <Link to="/technologies" className="hover:text-yellow-400">Technologies</Link>
                </div>

                {/* Auth Buttons (Right) */}
                <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
                    <Link
                        to="/logout"
                        className="border border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-slate-900 transition"
                    >
                        logout
                    </Link>

                    <Link
                        to="/signup"
                        className="bg-yellow-500 text-black px-4 py-1 rounded-full hover:bg-yellow-600 transition"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Hamburger (Mobile Only) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-2xl"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-3 text-white font-medium">
                    <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
                    <Link to="/technologies" onClick={() => setIsOpen(false)}>Technologies</Link>

                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="border border-white px-4 py-2 rounded-full text-center"
                    >
                        logout
                    </Link>

                    <Link
                        to="/signup"
                        onClick={() => setIsOpen(false)}
                        className="bg-yellow-500 text-black px-4 py-2 rounded-full text-center"
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
