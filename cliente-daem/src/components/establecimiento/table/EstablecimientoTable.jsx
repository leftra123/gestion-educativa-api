import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import infoCircleIcon from '../../../images/svg/infoCircleIcon.svg';
import plusCircleIcon from '../../../images/svg/plusCircleIcon.svg';
import { ThreeDotsVerticalActionEstablecimiento } from '../../popover/establecimiento/ThreeDotsTableEstablecimiento.jsx';
import { InfoOpen } from '../../popover/InfoOpen';
import { TableEntrySelector } from '../../shared/TableEntrySelector';
import { TableFooter } from '../../shared/TableFooter';
import { SortButton } from '../../button/SortButton';

export function EstablecimientoTable({ establecimientos, onEstablecimientoClick }) {
    const [expandedRowId, setExpandedRowId] = useState(null);
    const [entries, setEntries] = useState(Number(localStorage.getItem('entries')) || 10);
    const [page, setPage] = useState(1);
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [displayedEstablecimientos, setDisplayedEstablecimientos] = useState([...establecimientos].slice((page - 1) * entries, page * entries));

    useEffect(() => {
        const displayedList = [...establecimientos].slice((page - 1) * entries, page * entries);

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

        setDisplayedEstablecimientos(displayedList);
    }, [sortField, sortOrder, establecimientos, page, entries]);


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

    const handleRowClick = (id) => {
        if (expandedRowId === id) {
            setExpandedRowId(null);
        } else {
            setExpandedRowId(id);
        }
    };
    const handleEntriesChange = (e) => {
        const newEntries = Number(e.target.value);
        setEntries(newEntries);
        localStorage.setItem('entries', newEntries);
    }


    const handlePageChange = (direction) => {
        if (direction === 'next' && page * entries < establecimientos.length) {
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
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg my-6 overflow-hidden">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">
                                        <img src={infoCircleIcon} alt="icono de información" />
                                    </th>
                                    <th className="py-3 px-6 text-left relative">
                                        <span>Nombre</span>
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('nombre')} />
                                        </div>
                                    </th>
                                    <th className="py-3 px-6 text-left relative">
                                        <span>Encargado</span>
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('encargado')} />
                                        </div>
                                    </th>
                                    <th className="py-3 px-6 text-left relative">
                                        <span>RBD</span>
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('rbd')} />
                                        </div>
                                    </th>
                                    <th className="py-3 px-6 text-left relative">
                                        <span>DV</span>
                                        <div className="absolute right-1 top-4">
                                            <SortButton sortOrder={sortOrder} onSort={() => handleSortChange('dv')} />
                                        </div>
                                    </th>

                                    <th className="py-3 px-6 text-left">opciones</th>
                                    <th className="py-3 px-6 text-left">acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {displayedEstablecimientos && displayedEstablecimientos.map((establecimiento) => (
                                    <React.Fragment key={establecimiento.id}>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 ease-in-out" onClick={() => handleRowClick(establecimiento.id)}>
                                            <td className="py-3 px-6 text-left whitespace-nowrap">

                                                <div className="flex items-center">
                                                    <img src={plusCircleIcon} alt="icono de más" />
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left leading-relaxed">

                                                <div className="flex items-center">
                                                    <span className="font-medium">{establecimiento.nombre}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left leading-relaxed">

                                                <div className="flex items-center">
                                                    <span>{`${establecimiento.encargado.nombre} ${establecimiento.encargado.apellido_paterno} ${establecimiento.encargado.apellido_materno}`}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left leading-relaxed">

                                                <div className="flex items-center">
                                                    <span>{establecimiento.rbd}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left leading-relaxed">

                                                <div className="flex items-center">
                                                    <span>{establecimiento.dv}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left leading-relaxed">

                                                <div className="flex items-center">
                                                    {/* <Link
                                                        className="hover:underline hover:text-blue-500 mr-2 transition duration-200 ease-in-out"
                                                        to="/docente/{docente.establecimientos[0].nombre}}"
                                                        onClick={handleLinkClick}> */}
                                                    <Link
                                                        className="hover:underline hover:text-blue-500 mr-2 transition duration-200 ease-in-out"
                                                        to={`/docente/${establecimiento.id}`}
                                                        onClick={handleLinkClick}>
                                                        Ver docentes
                                                    </Link>
                                                    {/* este botoncito está para el futuro borrarlo papish */}
                                                    <InfoOpen />
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left leading-relaxed">

                                                <ThreeDotsVerticalActionEstablecimiento className="text-gray-800 hover:text-gray-600 transition-colors duration-200 ease-in-out" />

                                            </td>
                                        </tr>
                                        {expandedRowId === establecimiento.id && (
                                            <tr className="border-b border-gray-200 bg-gray-100">
                                                <td colSpan={7} className='text-center'>
                                                    No hay información extra sobre {establecimiento.nombre}.
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                        <TableFooter page={page} entries={entries} totalEntries={establecimientos.length} onPageChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}
