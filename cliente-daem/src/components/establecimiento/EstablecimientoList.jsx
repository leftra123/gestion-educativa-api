import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { getAllEstablecimientos } from "../../api/establecimiento.api"
import { EstablecimientoCard } from "../establecimiento/EstablecimientoCard"
import { Link } from 'react-router-dom';
import { FaSearch, FaTimes, FaTable, FaThLarge } from 'react-icons/fa';
import { SortButton } from "../../components/button/SortButton"

export function EstablecimientoList() {
    const navigate = useNavigate();
    const [establecimientos, setEstablecimientos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [view, setView] = useState(localStorage.getItem('view') || 'card');
    const clearSearch = () => {
        setSearchTerm('');
    };
    const changeView = (newView) => {
        setView(newView);
        localStorage.setItem('view', newView);
    };
    const redirectToEstablecimiento = (id) => {
        navigate(`/establecimiento/${id}`);
    };

    useEffect(() => {
        localStorage.setItem('view', view);
        async function loadEstablecimientos() {
            const res = await getAllEstablecimientos()
            setEstablecimientos(res.data);
        }
        loadEstablecimientos();
    }, [view]);

    const sortEstablecimientos = () => {
        let sortedEstablecimientos;
        if (sortOrder === 'asc') {
            sortedEstablecimientos = [...establecimientos].sort((a, b) => a.nombre.localeCompare(b.nombre));
            setSortOrder('desc');
        } else {
            sortedEstablecimientos = [...establecimientos].sort((a, b) => b.nombre.localeCompare(a.nombre));
            setSortOrder('asc');
        }
        setEstablecimientos(sortedEstablecimientos);
    };

    const filteredEstablecimientos = establecimientos.filter((establecimiento) => {
        const encargado = establecimiento.encargado;
        const encargadoFullName = `${encargado.nombre} ${encargado.apellido_paterno} ${encargado.apellido_materno}`.toLowerCase();
        return establecimiento.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            encargadoFullName.includes(searchTerm.toLowerCase()) ||
            establecimiento.rbd.toString().includes(searchTerm) ||
            establecimiento.dv.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return (
        <div>
            <div className="p-5 flex justify-between">
                <Link to="/establecimiento-crear" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    Crear Establecimiento
                </Link>
                <div className="relative">
                    <input
                        type="text"
                        className="rounded-lg pl-9 pr-14 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    {searchTerm === '' ? (
                        <div className="absolute left-2 top-3">
                            <FaSearch className="text-gray-400" />
                        </div>
                    ) : (
                        <div className="absolute left-2 top-3 cursor-pointer" onClick={clearSearch}>
                            <FaTimes className="text-gray-400" />
                        </div>
                    )}
                    <SortButton sortOrder={sortOrder} onSort={sortEstablecimientos} />
                </div>
            </div>
            <div className="flex justify-center">
                <button onClick={() => changeView('card')} className="p-2 rounded-md hover:bg-indigo-100 focus:outline-none">
                    <FaThLarge className={`text-2xl ${view === 'card' ? 'text-indigo-600' : 'text-gray-400'}`} />
                </button>
                <button onClick={() => changeView('table')} className="p-2 rounded-md hover:bg-indigo-100 focus:outline-none">
                    <FaTable className={`text-2xl ${view === 'table' ? 'text-indigo-600' : 'text-gray-400'}`} />
                </button>
            </div>
            {view === 'card' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 mx-auto">
                    {filteredEstablecimientos.map((establecimiento) => (
                        <div
                            key={establecimiento.id}
                            className="max-w-sm rounded overflow-hidden shadow-lg transition-all duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-pointer"
                            onClick={() => redirectToEstablecimiento(establecimiento.id)}
                        >
                            <EstablecimientoCard establecimiento={establecimiento} />
                        </div>

                    ))}
                </div>
            ) : (
                <div className="mr-4 ml-4 mb-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Encargado
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    RBD
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    DV
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Opciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredEstablecimientos.map((establecimiento) => (
                                <tr key={establecimiento.id} className="hover:bg-gray-100 transition ease-in-out duration-150 cursor-pointer" onClick={() => redirectToEstablecimiento(establecimiento.id)}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {establecimiento.nombre}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {`${establecimiento.encargado.nombre} ${establecimiento.encargado.apellido_paterno} ${establecimiento.encargado.apellido_materno}`}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {establecimiento.rbd}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {establecimiento.dv}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <Link to={`/docente`} className="text-indigo-600 hover:text-indigo-900 mr-4">Docentes</Link>
                                        <Link to={`/establecimiento/${establecimiento.id}`} className="text-red-600 hover:text-red-900">Asistentes</Link>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

