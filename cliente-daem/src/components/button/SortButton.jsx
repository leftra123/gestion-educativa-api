import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';

export function SortButton({ sortOrder, onSort }) {
  return (
    <div className="absolute right-2 top-2 cursor-pointer" onClick={onSort}>
      {sortOrder === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
    </div>
  );
}
