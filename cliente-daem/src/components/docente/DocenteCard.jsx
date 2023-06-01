import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function DocenteCard({ docente }) {
  const navigate = useNavigate();
  return (
    <div 
    className=' bg-indigo-600 p-4 mt-2 hover:bg-indigo-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg'
      onClick={() => { navigate(`/docente/${docente.id}`); }}
    >
      <h2 className="font-bold text-lg text-white text-center">{docente.rol}</h2>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">Persona:</strong> {docente.persona.nombre} {docente.persona.apellido_paterno} {docente.persona.apellido_materno}</p>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">Hora subvención:</strong> { docente.hora_subvencion }</p>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">Hora contrato:</strong> {docente.hora_contrato}</p>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">Fecha inicio:</strong> {docente.fecha_inicio}</p>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">Jubilado:</strong> {docente.jubilado ? "Sí" : "No"}</p>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">Bienios cumplidos:</strong> {docente.bienios_cumplidos}</p>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">Renuncia presentada:</strong> {docente.renuncia_presentada ? "Sí" : "No"}</p>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">Fecha salida:</strong> {docente.fecha_salida || "No registra"}</p>
      <p className="mt-2 text-white text-center"><strong className="font-semibold">tipo de subvención:</strong> {docente.subvencion.tipo}</p>
    </div>
  )
}

DocenteCard.propTypes = {
  docente: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rol: PropTypes.string.isRequired,
    hora_subvencion: PropTypes.number.isRequired,
    hora_contrato: PropTypes.number.isRequired,
    fecha_inicio: PropTypes.string.isRequired,
    jubilado: PropTypes.bool.isRequired,
    bienios_cumplidos: PropTypes.number.isRequired,
    renuncia_presentada: PropTypes.bool.isRequired,
    fecha_salida: PropTypes.string,
    // puedes agregar las otras propiedades según necesites
  }).isRequired,
};
