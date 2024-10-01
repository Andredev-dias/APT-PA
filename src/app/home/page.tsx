import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Next.ts",
  description: "Aprendizagem técnica Bosch",
}; 

export default function Home() {

  const dados: {imagem: string; titulo: string}[] = [
    {
      imagem: "sla",
      titulo: "n sei"
    },
    {
      imagem: "sla2",
      titulo: "n sei2"
    }
  ]

  return (
   <>
    <h1>Primeira página</h1>

    {dados.map((item, index) => (
      <div key={index}>
        <h1>{item.imagem}</h1>
        <h3>{item.titulo}</h3>
      </div>
    ))}

   </>
  );
}
