
import { useEffect, useState } from "react"
import { getAllEstablecimientos } from "../api/establecimiento.api"
import { EstablecimientoCard } from "./EstablecimientoCard"
export function EstablecimientoList() {
    const [establecimientos, setEstablecimientos] = useState([]);

    useEffect(() => {
        async function loadEstablecimientos() {
            const res = await getAllEstablecimientos()
            setEstablecimientos(res.data);
        }
        loadEstablecimientos();
    }, [])

    return (
        <div className="grid grid-cols-3 gap-3 p-5 mx-auto">
        {establecimientos.map((establecimiento) => (
            <EstablecimientoCard key={establecimiento.id} establecimiento={establecimiento} />)
        )}
    </div>
    
    )
}
