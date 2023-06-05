
export function TableEntrySelector({ entries, onEntriesChange }) {
    return (
        <div className="flex items-center mb-4">
            <label htmlFor="entries" className="mr-2 text-gray-500 font-bold">Mostrando </label>
            <select id="entries" value={entries} onChange={onEntriesChange} className="rounded-md  border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-500 font-bold">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <label htmlFor="entries" className="ml-2 text-gray-500 font-bold">entradas</label>
        </div>
    );
}
