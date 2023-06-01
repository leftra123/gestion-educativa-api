import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { CrearEstablecimientoButton } from "../button/CrearEstablecimientoButton";
import { SearchInput } from "../input/SearchInput";
import { getAllEstablecimientos } from "../../api/establecimiento.api"
import { ViewToggleButton } from "../toggle/ViewToggleButton";
import { EstablecimientoCardGrid } from "./EstablecimientoCardGrid";
import { EstablecimientoTable } from "./table/EstablecimientoTable";

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
            try{
                const res = await getAllEstablecimientos()
                setEstablecimientos(res.data);
            } catch (error) {
                console.log(error);
            }
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
                <CrearEstablecimientoButton />
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortOrder={sortOrder} onSort={sortEstablecimientos} />
            </div>
            <ViewToggleButton view={view} changeView={changeView} />
            {view === 'card' ? (
                <EstablecimientoCardGrid establecimientos={filteredEstablecimientos} onEstablecimientoClick={redirectToEstablecimiento} />
            ) : (
                <EstablecimientoTable establecimientos={filteredEstablecimientos} onEstablecimientoClick={redirectToEstablecimiento} />
            )}
        </div>
    );
}