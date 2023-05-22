import { useState } from "react";

export function useSearchAndSort(initialData) {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const search = (searchField) => {
    return data.filter(item => item[searchField].toLowerCase().includes(searchTerm.toLowerCase()));
  }

  const sort = (sortField) => {
    let sortedData;
    if (sortOrder === 'asc') {
      sortedData = [...data].sort((a, b) => a[sortField].localeCompare(b[sortField]));
      setSortOrder('desc');
    } else {
      sortedData = [...data].sort((a, b) => b[sortField].localeCompare(a[sortField]));
      setSortOrder('asc');
    }
    setData(sortedData);
  }

  return { data, setData, searchTerm, setSearchTerm, search, sort };
}