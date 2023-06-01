import { FaSearch, FaTimes } from 'react-icons/fa';
import { SortButton } from "../button/SortButton"

export function SearchInput({ searchTerm, setSearchTerm, sortOrder, onSort }) {
    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <div className="relative">
            <input
                type="text"
                className="rounded-lg pl-9 pr-14 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            {searchTerm === '' ? (
                <div className="absolute left-2 top-3">
                    <FaSearch className="text-gray-400" />
                </div>
            ) : (
                <div className="absolute left-2 top-3 cursor-pointer" onClick={clearSearch}>
                    <FaTimes className="text-gray-400" />
                </div>
            )}
            <div className="absolute right-4 top-3">
            <SortButton sortOrder={sortOrder} onSort={onSort} />
            </div>
        </div>
    );
}
