import Home from "./Home"
import Fim from "./Fim"
import FlashCardBoard from "./FlashCardBoard"
import { useState } from "react"

export default function App() {
    const [paginaAtual, setPaginaAtual] = useState('home')
    const [resultado, setResultado] = useState('')
    const [indice, setIndice] = useState(0)

    return (
        <>
            {
                paginaAtual === 'home' ? <Home setPaginaAtual={setPaginaAtual}/> 
                : paginaAtual === 'flash-card-board' ? <FlashCardBoard setResultado={setResultado} setPaginaAtual={setPaginaAtual} indice= {indice} setIndice={setIndice}/>
                : <Fim setIndice={setIndice} resultado={resultado} setPaginaAtual={setPaginaAtual}/>
            }
        </>
    )
}