import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createDocentes, deleteDocente, updateDocente, getDocente } from '../../api/docente.api'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function DocenteFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateDocente(params.id, data)
            toast.success('Docente actualizado correctamente', {
                position: 'bottom-right'
            })
        } else {
            await createDocentes(data);
            toast.success('Docente creado correctamente', {
                position: 'bottom-right'
            })
        }
        navigate('/docente')
    });

    useEffect(() => {
        async function loadDocente() {
            if (params.id) {
                const { data: { rol, hora_subvencion, hora_contrato, fecha_inicio, jubilado, bienios_cumplidos, renuncia_presentada, fecha_salida, persona, subvencion, contrato, reemplazando } } = await getDocente(params.id)
                setValue('rol', rol)
                setValue('hora_subvencion', hora_subvencion)
                setValue('hora_contrato', hora_contrato)
                setValue('fecha_inicio', fecha_inicio)
                setValue('jubilado', jubilado)
                setValue('bienios_cumplidos', bienios_cumplidos)
                setValue('renuncia_presentada', renuncia_presentada)
                setValue('fecha_salida', fecha_salida)
                setValue('persona.nombre', persona.nombre)
                setValue('persona.apellido_paterno', persona.apellido_paterno)
                setValue('persona.apellido_materno', persona.apellido_materno)
                setValue('subvencion.tipo', subvencion.tipo)
                setValue('contrato.tipo', contrato.tipo)
                setValue('reemplazando', reemplazando)
            }
        }
        loadDocente()
    }, [])
    

    return (
        <div className="max-w-md mx-auto mt-2">
    <h1 className="text-center text-2xl font-bold mb-5">Formulario Docente</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
            <input
                type="text"
                placeholder="Rol"
                {...register("rol", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.rol && <span className="text-red-500">{errors.rol.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Hora subvención"
                {...register("hora_subvencion", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.hora_subvencion && <span className="text-red-500">{errors.hora_subvencion.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Hora contrato"
                {...register("hora_contrato", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.hora_contrato && <span className="text-red-500">{errors.hora_contrato.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Fecha inicio"
                {...register("fecha_inicio", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.fecha_inicio && <span className="text-red-500">{errors.fecha_inicio.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Jubilado"
                {...register("jubilado", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.jubilado && <span className="text-red-500">{errors.jubilado.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Bienios cumplidos"
                {...register("bienios_cumplidos", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.bienios_cumplidos && <span className="text-red-500">{errors.bienios_cumplidos.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Renuncia presentada"
                {...register("renuncia_presentada", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.renuncia_presentada && <span className="text-red-500">{errors.renuncia_presentada.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Fecha salida"
                {...register("fecha_salida", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.fecha_salida && <span className="text-red-500">{errors.fecha_salida.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Persona"
                {...register("persona.nombre", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.persona && <span className="text-red-500">{errors.persona.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Apellido paterno"
                {...register("persona.apellido_paterno", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.persona && <span className="text-red-500">{errors.persona.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="Apellido materno"
                {...register("persona.apellido_materno", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.persona && <span className="text-red-500">{errors.persona.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="subvencion"
                {...register("subvencion.nombre", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.subvencion && <span className="text-red-500">{errors.subvencion.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="reemplazando"
                {...register("reemplazando.nombre", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.reemplazando && <span className="text-red-500">{errors.reemplazando.message}</span>}
        </div>
        <div>
            <input
                type="text"
                placeholder="establecimientos"
                {...register("establecimientos.nombre", { required: "Este campo es requerido" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.establecimientos && <span className="text-red-500">{errors.establecimientos.message}</span>}
        </div>

        <button type="submit" className="px-5 py-2 bg-blue-500 text-white rounded transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105">Guardar</button>
        {params.id && 
            <button 
                onClick={async (event) => {
                    event.preventDefault();
                    const accepted = window.confirm('¿Estás seguro de eliminar?')
                    if (accepted) {
                        await deleteDocente(params.id)
                        toast.success('Docente eliminado', {
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
