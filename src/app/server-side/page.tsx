import Link from "next/link";
import { Suspense } from "react"

type IData = {
    results: {
        name: string;
        id: string;
    }[]
}

const ServerSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()

    return(
        <>
            <h1>Server Side Rendering</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data.results.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <Link href={`/perso/${item.id}`}>ABRIR</Link>
                        </div>
                    )
                })}
            </Suspense>
        </>
    )
}

export default ServerSide