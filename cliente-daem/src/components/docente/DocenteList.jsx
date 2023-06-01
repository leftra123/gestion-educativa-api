import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDocentes } from "../../api/docente.api";
import { DocenteCard } from "./DocenteCard";
import { DocenteCardGrid } from "./DocenteCardGrid";
import { DocenteTable } from "./DocenteTable";
import { SortButton } from "../button/SortButton";
import { CrearDocenteButton } from "../button/CrearDocente";
import { SearchInput } from "../input/SearchInput";
import { ViewToggleButton } from "../toggle/ViewToggleButton";

export function DocenteList() {
    const navigate = useNavigate();
    const [docentes, setDocentes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [view, setView] = useState(localStorage.getItem("view") || "card");
    const clearSearch = () => {
        setSearchTerm("");
    };
    const changeView = (newView) => {
        setView(newView);
        localStorage.setItem("view", newView);
    };
    const redirectToDocente = (id) => {
        navigate(`/docente/${id}`);
    };

    useEffect(() => {
        localStorage.setItem("view", view);
        async function loadDocentes() {
            const res = await getAllDocentes();
            setDocentes(res.data);
        }
        loadDocentes();
    }, [view]);

    const sortDocentes = () => {
        let sortedDocentes;
        if (sortOrder === "asc") {
            sortedDocentes = [...docentes].sort((a, b) =>
                a.nombre.localeCompare(b.nombre)
            );
            setSortOrder("desc");
        } else {
            sortedDocentes = [...docentes].sort((a, b) =>
                b.nombre.localeCompare(a.nombre)
            );
            setSortOrder("asc");
        }
        setDocentes(sortedDocentes);
    };

    const filteredDocentes = docentes.filter((docente) => {
        const docenteFullName = `${docente.nombre} ${docente.apellido_paterno} ${docente.apellido_materno}`.toLowerCase();
        return (
            docenteFullName.includes(searchTerm.toLowerCase()) ||
            docente.rut.toString().includes(searchTerm)
        );
    });

    return (
        <div>
            <div className="p-5 flex justify-between">
                <CrearDocenteButton />
                <SearchInput />
            </div>
            <ViewToggleButton view={view} changeView={changeView}/>
            {view === "card" ? (
                <DocenteCardGrid docentes={filteredDocentes}
                onDocenteClick={redirectToDocente} />
            ) : (
                <DocenteTable docentes={filteredDocentes}
                onDocenteClick={redirectToDocente} />
            )}

            </div>
    );
}
