export function TableFooter({ page, entries, totalEntries, onPageChange }) {
    return (
        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-900">
                Mostrando {page} de {Math.ceil(totalEntries / entries)} Páginas
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l" 
                        onClick={() => onPageChange('prev')}>
                    Anterior
                </button>
                <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r" 
                        onClick={() => onPageChange('next')}>
                    Siguiente
                </button>
            </div>
            <span className="text-xs">Tienes {totalEntries} entradas</span> 
        </div>
    );
}