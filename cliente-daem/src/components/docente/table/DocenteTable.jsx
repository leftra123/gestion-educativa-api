import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { TableEntrySelector } from "../../shared/TableEntrySelector";//creo que debería agregar un tableEntrySelector en una carpeta aparte ya que se repite en varios componentes
import { TableFooter } from "../../shared/TableFooter";
import { SortButton } from "../../button/SortButton";
export function DocenteTable({ docentes, onDocenteClick }) {
    const handleLinkClick = (e) => {
        e.stopPropagation();
    };
    
    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen  bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <TableEntrySelector />
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg my-6">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">establecimiento</th>
                                    <th className="py-3 px-6 text-left">Rol</th>
                                    <th className="py-3 px-6 text-left">Nombres</th>
                                    {/* <th className="py-3 px-6 text-left">Hora subvencion</th> */}
                                    {/* <th className="py-3 px-6 text-left">Hora contrato</th> */}
                                    <th className="py-3 px-6 text-left">Rut</th>
                                    <th className="py-3 px-6 text-left">Email</th>
                                    <th className="py-3 px-6 text-left">opciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {docentes.map((docente) => (
                                    <tr className="border-b border-gray-200 hover:bg-gray-100"
                                        key={docente.id}
                                        onClick={() => onDocenteClick(docente.id)}
                                    >
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="font-medium">{docente.establecimientos[0].nombre}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span className="font-medium">{docente.rol}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center capitalize">
                                                <span className="font-medium mr-1">{`${docente.persona.nombre} ${docente.persona.apellido_paterno} ${docente.persona.apellido_materno}`}</span>
                                            </div>
                                        </td>
                                        {/* <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{docente.hora_contrato}</span>
                                            </div>
                                        </td> */}
                                        {/* <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{docente.hora_subvencion}</span>
                                            </div>
                                        </td>  */}
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{docente.persona.rut}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{docente.persona.correo}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <Popover className="relative">
                                                    {({ open }) => (
                                                        <>
                                                            <Popover.Button
                                                                className={`
                                                                    ${open ? '' : 'text-opacity-80'}    
                                                                    text-gray-500
                                                                    hover:text-opacity-100
                                                                    focus:outline-none
                                                                    focus:text-opacity-100
                                                                    transition ease-in-out duration-150
                                                                `}
                                                            >
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                                    <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z" clipRule="evenodd" />
                                                                </svg>
                                                            </Popover.Button>
                                                            <Popover.Panel className="absolute z-10 w-48 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                        <Link to={`/docente-editar/${docente.id}`} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                            </svg>
                                                                            <div className="ml-4">
                                                                                <p className="text-base leading-6 font-medium text-gray-900">
                                                                                    Editar
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                        <Link to={`/docente-eliminar/${docente.id}`} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                                            <svg className="flex-shrink-0 h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            <div className="ml-4">

                                                                                <p className="text-base leading-6 font-medium text-gray-900">
                                                                                    Eliminar
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </>
                                                    )}
                                                </Popover>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <TableFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}