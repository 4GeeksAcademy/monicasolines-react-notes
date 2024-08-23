
import React, { useState } from "react";

export const StateExample = () => {
    const [text, setText] = useState('Hola Mundo')
    const [counter, setCounter] = useState(1);
    const [background, setBackground] = useState('primary')

    const mayuscula = () => {
        setText(text.toUpperCase())
    }

    const cambio = () => {
        // quiero que text sea igual a nuevo text
        setText('Nuevo texto')
        setCounter(100)
    }

    const handleReset = () => {
        setCounter(0);
        setText('Hola Mundo');
    }

    return (
        <div>
            <div className="container m-3 h1 strong text-center"> useState example</div> 
            <div className={`alert alert-${background} display-1 m-3`} role="alert">
               {counter} - {text}
            </div>
            <div className="my-2 container">
                <div> Cambios varios al alert </div>
                {/* invoco funcion en el onClick() */}
                <button onClick={mayuscula} type="button" className="btn btn-primary">Mayusculas</button>
               
                {/* ejecuto la funcion dentro del onclick direectamente */}
                <button onClick={() => setText(text.toLowerCase())} type="button" className="btn btn-secondary">lowercase</button>
                
                <button onClick={cambio} type="button" className="btn btn-success">change value</button>
                <button onClick={() => setCounter(counter => counter + 1)} type="button" className="btn btn-danger"> Incrementar </button>
                <button onClick={() => setCounter(counter => counter - 1)} type="button" className="btn btn-danger"> decrease </button>
                <button onClick={handleReset} type="button" className="btn btn-warning">Reset</button>
                <div className={`alert alert-${background} display-1 m-3`} role="alert">
               {counter} 
            </div>
            <div className="m-2">
                <div> cambiar colores del alert </div>
                <button onClick={() => setBackground('primary')} type="button" className="btn btn-primary">primary/azul</button>
                <button onClick={() => setBackground('warning')} type="button" className="btn btn-warning"> warning/amarillo </button>
                <button onClick={() => setBackground('danger')} type="button" className="btn btn-danger"> rojo/ danger</button>
                <button onClick={() => setBackground('success')} type="button" className="btn btn-success">verde/success</button>
            </div>
            </div>
        </div>
    )

}