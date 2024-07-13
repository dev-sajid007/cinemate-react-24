import { useEffect, useState } from "react";

function useFetch( apiPath ,queryTerm="" ) {

    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies() {
            const res = await fetch(url);
            const data = await res.json();
            setData(data.results);
        }
        fetchMovies();
    }, [url]);

    return { data };

}

export default useFetch;
