"use client"

import React, { useState } from "react"

const Maths: React.FC = () => {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>()
    const msgError = "Digite um número válido"
    
   const handleSoma = () => {
    const n1 = parseFloat(numero1)
    const n2 = parseFloat(numero2)
    if(!isNaN(n1) && !isNaN(n2)){
        setRespSoma(n1 + n2)
    }else{
        setRespSoma(undefined)
    }
   }


    return(
        <>
            <h1>Use client com controle de estado</h1>
            <div>
                <label >Número 01</label>
                <input type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
            </div>
            <div>
                <label >Número 02</label>
                <input type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
            </div>
            <div>
                <h2>Soma</h2>
                {!isNaN(respSoma ?? NaN) ? respSoma : msgError}
                <button onClick={handleSoma}>SOMAR</button>
            </div>
        </>
    )
}

export default Maths