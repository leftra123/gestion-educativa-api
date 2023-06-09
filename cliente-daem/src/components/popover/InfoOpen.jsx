import { Popover } from "@headlessui/react"
import Tippy from "@tippyjs/react"

export function InfoOpen() {
    return (
        <>
            <Popover className="relative inline-flex">
                {({ open }) => (
                    <>
                        <Tippy content="Opción deshabilitada">
                            <Popover.Button className={`relative hover:text-blue-500 transition duration-200 ease-in-out ${open ? 'bg-gray-100' : ''}`}>
                                Ver asistentes
                            </Popover.Button>
                        </Tippy>
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