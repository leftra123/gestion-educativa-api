import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // los proptypes son para validar los tipos de datos que se reciben, mostraba error, pero si vuelve a fallar lo borras de aquí

export function EstablecimientoCard({ establecimiento }) {
  const navigate = useNavigate();
  const { nombre, apellido_paterno, apellido_materno } = establecimiento.encargado;
  const encargadoFullName = `${nombre} ${apellido_paterno} ${apellido_materno}`;
  return (
    //la linea que viene evita que me muestre el error de los proptypes por no estar validados
    <div 
    className='bg-blue-500 p-3 mt-1 hover:bg-blue-600 hover:cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-100 rounded-lg shadow-lg'
    // eslint-disable-next-line react/prop-types
    onClick={() => { navigate(`/establecimiento/${establecimiento.id}`); }}
>
    <h2 className="font-bold text-lg text-white text-center">{establecimiento.nombre}</h2>
    <p className="mt-2 text-white text-center"><strong className="font-semibold">Encargado:</strong> {encargadoFullName ? encargadoFullName : 'No asignado'}</p>
    <p className="mt-2 text-white text-center"><strong className="font-semibold">RBD:</strong> {establecimiento.rbd} - {establecimiento.dv}</p>
    {/* <p className="mt-2 text-white text-center"><strong className="font-semibold">DV:</strong> {establecimiento.dv}</p> */}
</div>


  )
}

EstablecimientoCard.propTypes = {
  establecimiento: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    encargado: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      apellido_paterno: PropTypes.string.isRequired,
      apellido_materno: PropTypes.string.isRequired,
    }).isRequired,
    rbd: PropTypes.number.isRequired,
    dv: PropTypes.string.isRequired,
  }).isRequired,
};
