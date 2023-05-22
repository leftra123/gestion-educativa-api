import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createEstablecimientos, deleteEstablecimiento, updateEstablecimiento, getEstablecimiento } from '../api/establecimiento.api'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function EstablecimientoFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateEstablecimiento(params.id, data)
            toast.success('Establecimiento actualizado correctamente', {
                position: 'bottom-right'
            })
        } else {
            await createEstablecimientos(data);
            toast.success('Establecimiento creado correctamente', {
                position: 'bottom-right'
            })
        }
        navigate('/establecimiento')
    });

    useEffect(() => {
        async function loadEstablecimiento() {
            if (params.id) {
                const { data: { nombre, rbd, encargado, dv } } = await getEstablecimiento(params.id)
                setValue('nombre', nombre)
                setValue('rbd', rbd)
                setValue('dv', dv)
                setValue('encargado.nombre', encargado.nombre)
                setValue('encargado.apellido_paterno', encargado.apellido_paterno)
                setValue('encargado.apellido_materno', encargado.apellido_materno)
                setValue('encargado.rut', encargado.rut)
                setValue('encargado.fecha_nacimiento', encargado.fecha_nacimiento)
                setValue('encargado.direccion', encargado.direccion)
                setValue('encargado.telefono', encargado.telefono)
                setValue('encargado.correo', encargado.correo)
            }
        }
        loadEstablecimiento()
    }, [])


    return (
        <div className="max-w-md mx-auto mt-2 mb-3 shadow-md p-7 rounded-lg bg-white">
            <button
  onClick={() => navigate('/establecimiento')}
  className="flex items-center justify-center border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 px-1 py-1 shadow-md"
>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M9.707 4.293a1 1 0 010 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
</button>



    <h1 className="text-center text-2xl font-bold mt-10 mb-5">Formulario Establecimiento</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className='block mb-1 font-bold text-gray-500'>Nombre del Colegio</label>
                    <input
                        type="text"
                        placeholder="Nombre del Colegio"
                        {...register("nombre", { required: "Este campo es requerido" })}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"

                    />
                    {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>RBD</label>
                    <input
                        type="text"
                        placeholder="RBD"
                        {...register("rbd", { required: "Este campo es requerido", maxLength: { value: 4, message: "Máximo 5 números" } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"

                    />
                    {errors.rbd && <span className="text-red-500">{errors.rbd.message}</span>}
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Dígito verificador</label>
                    <input
                        type="text"
                        placeholder="DV"
                        {...register("dv", { required: "Este campo es requerido", maxLength: { value: 1, message: "Máximo 1 Caracter" } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {errors.rbd && <span className="text-red-500">{errors.dv.message}</span>}
                </div>
                <div className="text-center text-2xl font-bold mb-5">Datos del Encargado</div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Nombres</label>
                    <input
                        type="text"
                        placeholder="Nombre del Encargado"
                        {...register("encargado.nombre")}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Apellido paterno</label>
                    <input
                        type="text"
                        placeholder="Apellido Paterno del Encargado"
                        {...register("encargado.apellido_paterno")}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Apellido materno</label>
                    <input
                        type="text"
                        placeholder="Apellido Materno del Encargado"
                        {...register("encargado.apellido_materno")}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Rut</label>
                    <input
                        type="text"
                        placeholder="Rut del Encargado"
                        {...register("encargado.rut")}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Fecha de Nacimiento</label>
                    <input
                        type="date"
                        placeholder="Fecha de Nacimiento del Encargado"
                        {...register("encargado.fecha_nacimiento")}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Dirección</label>
                    <input
                        type="text"
                        placeholder="Dirección del Encargado"
                        {...register("encargado.direccion")}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Celular</label>
                    <input
                        type="text"
                        placeholder="Teléfono del Encargado"
                        {...register("encargado.telefono")}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div>
                <label className='block mb-1 font-bold text-gray-500'>Correo</label>
                    <input
                        type="text"
                        placeholder="Correo del Encargado"
                        {...register("encargado.correo")}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <button type="submit" className="px-5 py-2 bg-blue-500 text-white rounded transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105">Guardar</button>
                {params.id &&
                    <button
                        onClick={async (event) => {
                            event.preventDefault();
                            const accepted = window.confirm('¿Estás seguro de eliminar?')
                            if (accepted) {
                                await deleteEstablecimiento(params.id)
                                toast.success('Establecimiento eliminado', {
                                    position: 'bottom-right'
                                })
                                navigate('/establecimiento')
                            }
                        }}
                        className="px-5 py-2 bg-red-500 text-white rounded ml-2 transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
                    >
                        Eliminar
                    </button>
                }
            </form>
        </div>



    );
}
