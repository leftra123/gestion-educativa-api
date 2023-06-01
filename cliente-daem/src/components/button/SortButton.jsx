import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';

export function SortButton({ sortOrder, onSort }) {
  return (
    <div className="right-2 top-3 cursor-pointer" onClick={onSort}>
      {sortOrder === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
    </div>
  );
}
