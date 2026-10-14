import { useState } from "react";
const useFilter = (data, callback) => {
    const [query, setQuery] = useState('');

    const filteredData = data.filter((el) => {
    return callback(el).toLowerCase().includes(query);
  });

    return [filteredData, setQuery];
};
  
  export default useFilter;