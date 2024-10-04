"use client"

import { useEffect, useState } from "react";

interface IData {
    name: string;
    id: string;
}

const FetchPage = () => {
    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
            const data = await res.json()
            setCharacters(data.results)
        }
        load()
    }, [])
    

    return(
        <>
        <h1>Fetch Nativo para requisições get</h1>
        {characters.map((item) => {
            return(
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            )
        })}
        </>
    )
}

export default FetchPage;