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
            }
        }
        loadEstablecimiento()
    }, [])
    

    return (
        <div className="max-w-md mx-auto mt-2">
    <h1 className="text-center text-2xl font-bold mb-5">Formulario Establecimiento</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
            <input
                type="text"
                placeholder="Nombre del Colegio"
                {...register("nombre", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="RBD"
                {...register("rbd", { required: "Este campo es requerido", maxLength: { value: 4, message: "Máximo 5 números" } })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.rbd && <span className="text-red-500">{errors.rbd.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="DV"
                {...register("dv", { required: "Este campo es requerido", maxLength: { value: 1, message: "Máximo 1 Caracter" } })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.rbd && <span className="text-red-500">{errors.dv.message}</span>}
        </div>
        <div>
    <input
        type="text"
        placeholder="Nombre del Encargado"
        {...register("encargado.nombre")}
        className="w-full px-3 py-2 border border-gray-300 rounded"
    />
</div>
<div>
    <input
        type="text"
        placeholder="Apellido Paterno del Encargado"
        {...register("encargado.apellido_paterno")}
        className="w-full px-3 py-2 border border-gray-300 rounded"
    />
</div>
<div>
    <input
        type="text"
        placeholder="Apellido Materno del Encargado"
        {...register("encargado.apellido_materno")}
        className="w-full px-3 py-2 border border-gray-300 rounded"
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
