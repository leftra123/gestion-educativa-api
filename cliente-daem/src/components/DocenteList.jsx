import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getAllDocentes } from "../api/docente.api";
import { DocenteCard } from "./DocenteCard";

export function DocenteList() {
    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        async function loadDocentes() {
            const res = await getAllDocentes();
            setDocentes(res.data);
        }
        loadDocentes();
    }, []);

    return (
        <div>
            <div className="p-5 flex">
                <Link to="/docente-crear" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    Crear Docente
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-3 p-5 mx-auto">
                {docentes.map((docente) => (
                    <DocenteCard key={docente.id} docente={docente} />)
                )}
            </div>
        </div>
    );
}
