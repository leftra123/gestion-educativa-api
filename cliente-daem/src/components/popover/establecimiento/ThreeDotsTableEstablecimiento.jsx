import { EditIcon } from '../../../images/svg/EditIcon'
import { TrashIcon } from '../../../images/svg/TrashIcon';
import { TrheeDotsVertical } from '../../../images/svg/ThreeDotsVertical';
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';

export function ThreeDotsVerticalActionEstablecimiento() {
    return (
        <div className="flex items-center">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`${open ? '' : 'text-opacity-80'} text-gray-500 hover:text-opacity-100 focus:outline-none focus:text-opacity-100 transition ease-in-out duration-150`}
                        >
                            <TrheeDotsVertical />
                        </Popover.Button>
                        <Popover.Panel className="absolute z-10 w-48 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    <Link className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                        <EditIcon />
                                        <div className="ml-4">
                                            <p className="text-base leading-6 font-medium text-gray-900"
                                            >
                                                Editar
                                            </p>
                                        </div>
                                    </Link>
                                    <Link className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
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
    )
}