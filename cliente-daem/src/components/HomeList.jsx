import { Link } from 'react-router-dom';
import { FaBuilding, FaChalkboardTeacher, FaUserTie, FaCity, FaSun, FaMoon } from 'react-icons/fa'; 
import { Footer } from './Footer';
import useDarkMode from '../hooks/useDarkMode';
import logo from '../images/logo-color-galvarino.png'; 

export function HomeList() {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen font-body space-y-6 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
          {/* <button onClick={toggleDarkMode} className="absolute top-0 right-0 m-4 p-2 rounded-full focus:outline-none">
                {darkMode ? <FaSun /> : <FaMoon />}
            </button> */}
            <div className="w-32 h-32 rounded-full flex items-center justify-center mb-2 overflow-hidden relative">
                <img src={logo} alt="Logo Municipalidad de Galvarino" className="object-cover w-full h-full" />
            </div>
            <h1 className="text-4xl font-bold">Bienvenido a DAEM</h1>
            <h2 className="text-2xl font-semibold mx-2 text-center">Aquí tienes un conjunto de opciones para elegir lo que deseas hacer.</h2>
            <div className="flex flex-wrap justify-center ">
                <Link to="/establecimiento" className="group m-4 w-64 h-32 shadow-lg rounded-lg flex items-center justify-center transition duration-500 ease-in-out transform hover:scale-110 hover:border-purple-500 border-2 hover:border-opacity-50 cursor-pointer">
                    <FaBuilding className="text-4xl group-hover:text-purple-500"/>
                    <h2 className="text-2xl font-semibold ml-2">Establecimientos</h2>
                </Link>
                <Link to="/docente" className="group m-4 w-64 h-32 shadow-lg rounded-lg flex items-center justify-center transition duration-500 ease-in-out transform hover:scale-110 hover:border-purple-500 border-2 hover:border-opacity-50 cursor-pointer">
                    <FaChalkboardTeacher className="text-4xl group-hover:text-purple-500"/>
                    <h2 className="text-2xl font-semibold ml-2">Docentes</h2>
                </Link>
                <Link to="/asistente" className="group m-4 w-64 h-32 shadow-lg rounded-lg flex items-center justify-center transition duration-500 ease-in-out transform hover:scale-110 hover:border-purple-500 border-2 hover:border-opacity-50 cursor-pointer">
                    <FaUserTie className="text-4xl group-hover:text-purple-500"/>
                    <h2 className="text-2xl font-semibold ml-2">Asistentes</h2>
                </Link>
                <Link to="/daem" className="group m-4 w-64 h-32 shadow-lg rounded-lg flex items-center justify-center transition duration-500 ease-in-out transform hover:scale-110 hover:border-purple-500 border-2 hover:border-opacity-50 cursor-pointer">
                    <FaCity className="text-4xl group-hover:text-purple-500"/>
                    <h2 className="text-2xl font-semibold ml-2">DAEM</h2>
                </Link>
                <Footer />
            </div>
        </div>
    );
}
