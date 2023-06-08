import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { TableEntrySelector } from "../../shared/TableEntrySelector";
import { TableFooter } from "../../shared/TableFooter";
import { SortButton } from "../../button/SortButton";
import { TrashIcon } from '../../../images/svg/TrashIcon'
import { TrheeDotsVertical } from "../../../images/svg/ThreeDotsVertical";
import { EditIcon } from "../../../images/svg/EditIcon";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export function DocenteTable({ docentes, onDocenteClick }) {
    const [entries, setEntries] = useState(Number(localStorage.getItem('entries')) || 10);
    const [page, setPage] = useState(1);
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [displayedDocentes, setDisplayedDocentes] = useState([...docentes].slice((page - 1) * entries, page * entries));

    useEffect(() => {
        const displayedList = [...docentes].slice((page - 1) * entries, page * entries);

        displayedList.sort((a, b) => {
            if (sortField) {
                if (sortOrder === 'asc') {
                    return a[sortField] > b[sortField] ? 1 : -1;
                } else {
                    return a[sortField] < b[sortField] ? 1 : -1;
                }
            }
            return 0;
        });

        setDisplayedDocentes(displayedList);
    }, [sortField, sortOrder, docentes, page, entries]);

    const handleSortChange = (field) => {
        if (field === sortField) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    }

    const handleLinkClick = (e) => {
        e.stopPropagation();
    };
    
    const handleEntriesChange = (e) => {
        const newEntries = Number(e.target.value);
        setEntries(newEntries);
        localStorage.setItem('entries', newEntries);
    }

    const handlePageChange = (direction) => {
        if (direction === 'next' && page * entries < docentes.length) {
            setPage(page + 1);
        } else if (direction === 'prev' && page > 1) {
            setPage(page - 1);
        }
    }

    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen  bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <TableEntrySelector entries={entries} onEntriesChange={handleEntriesChange} />
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg my-6">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left relative">
                                        <span>Establecimiento</span>
                                            <Tippy content="Ordenar por establecimiento">
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('establecimiento')} />
                                        </div>
                                            </Tippy>
                                    </th>
                                    <th className="py-3 px-6 text-left relative">
                                        <span>Rol</span>
                                    <Tippy content="Ordenar por rol">
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('rol')} />
                                        </div>
                                    </Tippy>
                                    </th>
                                    <th className="py-3 px-6 text-left relative">
                                        <span>Nombres</span>
                                    <Tippy content="Ordenar por nombres">
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('nombres')} />
                                        </div>
                                    </Tippy>
                                    </th>
                                    <th className="py-3 px-6 text-left relative">
                                        <span>Rut</span>
                                    <Tippy content="Ordenar por rut">
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('rut')} />
                                        </div>
                                    </Tippy>
                                    </th>
                                    <th className="py-3 px-6 text-left relative">
                                        <span>Email</span>
                                    <Tippy content="Ordenar por email">
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('email')} />
                                        </div>
                                    </Tippy>
                                    </th>
                                    <Tippy content="Seleccionar acción">
                                    <th className="py-3 px-6 text-left">Acciones</th>
                                    </Tippy>
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
                                                                <Tippy content="Seleccionar acción">
                                                                    <span><TrheeDotsVertical /></span>
                                                                </Tippy>
                                                            </Popover.Button>
                                                            <Popover.Panel className="absolute z-10 w-48 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                        <Link to={`/docente/${docente.id}`} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                                            <EditIcon />
                                                                            <div className="ml-4">
                                                                                <p className="text-base leading-6 font-medium text-gray-900">
                                                                                    Editar
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                        <Link to={`/docente/${docente.id}`} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                                                            <TrashIcon />
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