import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import Tippy from '@tippyjs/react';

export function EstablecimientoCard({ establecimiento }) {
  const navigate = useNavigate();
  const { nombre, apellido_paterno, apellido_materno } = establecimiento.encargado;
  const encargadoFullName = `${nombre} ${apellido_paterno} ${apellido_materno}`;

  return (
    <Tippy content='Ver detalles del establecimiento' placement="top">
    <div 
    className=' bg-indigo-600 p-4 mt-2 hover:bg-indigo-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg'
    onClick={() => { navigate(`/establecimiento/${establecimiento.id}`); }}
>
    <h2 className="text-2xl text-indigo-200 text-center"><span className="text-white">{establecimiento.rbd}</span> - <span className="text-white">{establecimiento.dv}</span></h2>
    <h3 className="font-bold text-white text-center mb-2">{establecimiento.nombre}</h3>
    <p className="text-sm text-indigo-200 text-center mb-1">Encargado: <span className="text-white capitalize">{encargadoFullName ? encargadoFullName : 'no asignado'}</span></p>
</div>
</Tippy>
  )
}

EstablecimientoCard.propTypes = {
  establecimiento: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    encargado: PropTypes.shape({
      nombre: PropTypes.string,
      apellido_paterno: PropTypes.string,
      apellido_materno: PropTypes.string,
    }),
    rbd: PropTypes.number.isRequired,
    dv: PropTypes.string.isRequired,
  }).isRequired,
};
