import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Next.ts",
  description: "Aprendizagem técnica Bosch",
}; 

export default function Home() {
  return (
   <>
    <h1>Primeira página</h1>
   </>
  );
}
