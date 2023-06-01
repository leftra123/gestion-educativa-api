import { DocenteCard } from "./DocenteCard";

export function DocenteCardGrid({ docentes, onDocenteClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5 mx-auto">
            {docentes.map((docente) => (
                <div
                    key={docente.id}
                    onClick={() => onDocenteClick(docente.id)}
                >
                    <DocenteCard docente={docente} />
                </div>
            ))}
        </div>
    );
}