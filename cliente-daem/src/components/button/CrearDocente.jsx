import { Link } from "react-router-dom";

export function CrearDocenteButton(){
    return(
        <Link to="/docente-crear" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    Crear Docente
                </Link>
    )
}