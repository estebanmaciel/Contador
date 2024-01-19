import { useState } from "react"


export default function Contador({tipoContador = ""}) {

    const [number, setNumber] = useState(0)
    const Aumentar = () => {
        setNumber(number + 1)
    }

    const Reducir = () => {
        setNumber(number - 1)
    }

    const Reset = () => {
        setNumber(0)
    }

  return (
    <>
        <h2>{tipoContador}</h2>
        <div className="alert alert-light" role="alert">
             {number}
        </div>
        <div style={{display:"flex", gap:"10px"}}>
            <button onClick={Aumentar} type="button" className="btn btn-primary">Aumentar</button>
            <button onClick={Reducir }type="button" className="btn btn-danger">Reducir</button>
            <button onClick={Reset} type="button" className="btn btn-warning">Reiniciar</button>
        </div>
    </>
  )
}

