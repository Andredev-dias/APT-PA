import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface IDataStaticIndex {
    results: IData[];
}

const Perso = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data: IData = await res.json()

    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <p>{data.status}</p>
            <p>{data.species}</p>
            <Image className="h-auto w-[500px]" src={data.image} alt="Photo" width={200} height={200} priority={true}></Image>
        </div>
    )
}

export default Perso

export async function generateStaticParams() {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IDataStaticIndex = await res.json();
    return data.results.map((item) => item.id.toString());
}