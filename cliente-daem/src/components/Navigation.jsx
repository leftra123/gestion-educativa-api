import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import logo from '../images/logo-color-galvarino.png';

export function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    //usar para el dark mode en el futuro
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className={`shadow-md dark:bg-gray-800  text-gray-900 dark:text-white p-5 transition-colors duration-300`}>
            <div className="flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold hover:text-gray-500 dark:hover:text-gray-400 transition-transform duration-200 ease-in-out transform hover:scale-105">
                    <img src={logo} alt="Logo" className="h-12 w-12 transform transition-transform duration-200 hover:scale-110" />
                </Link>
                <div className={`${menuOpen ? 'flex' : 'hidden'} mt-4 lg:flex lg:items-center lg:mt-0 space-x-4 transition-height duration-300 ease-in-out`}>
                    {["establecimiento", "docente", "asistentes", "DAEM"].map(path => (
                        <Link to={`/${path}`} className="text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 transition-transform duration-200 ease-in-out transform hover:scale-105" key={path}>
                            {path.charAt(0).toUpperCase() + path.slice(1)}
                        </Link>
                    ))}
                </div>
                <button
                    className="lg:hidden focus:outline-none transition-transform duration-200 ease-in-out transform hover:scale-105"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6 text-gray-900 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
