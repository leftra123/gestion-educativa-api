import { Popover } from "@headlessui/react"

export function InfoOpen(){
    return(
        <>
        <Popover className="relative inline-flex">
                                                        {({ open }) => (
                                                            <>
                                                                <Popover.Button className={`relative hover:text-blue-500 transition duration-200 ease-in-out ${open ? 'bg-gray-100' : ''}`}>
                                                                    Ver asistentes
                                                                </Popover.Button>
                                                                <Popover.Panel className="absolute z-10">
                                                                    <div className="p-2 bg-white shadow-lg border border-gray-200 rounded">
                                                                        Esto por ahora está en desarrollo.
                                                                    </div>
                                                                </Popover.Panel>
                                                            </>
                                                        )}
                                                    </Popover>
        </>
    )
}