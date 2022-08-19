import { useState } from "react"
import Results from "./results";

export default function SearchBar({items, onItemSelected}){

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function handleChange(e){
        const value = e.target.value;
        setQuery(value);
    }

    return <div>
        <input type="text" onChange={handleChange} value={query} />
        <Results 
          items={items}
          onItemSelected={() => {}}
          query={query}
          onResultsCalculated={() => {}}
        />
    </div>
}