import { EstablecimientoCard } from "./EstablecimientoCard"

export function EstablecimientoCardGrid({ establecimientos, onEstablecimientoClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 mx-auto">
            {establecimientos.map((establecimiento) => (
                <div
                    key={establecimiento.id}
                    onClick={() => onEstablecimientoClick(establecimiento.id)}
                >
                    <EstablecimientoCard establecimiento={establecimiento} />
                </div>
            ))}
        </div>
    );
}