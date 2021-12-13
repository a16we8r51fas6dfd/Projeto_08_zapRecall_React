import { useState } from "react"
import React from "react-dom"
import LogoMini from "./assets/logo-mini.png"
import Turn from "./assets/turn.png"
import "./FlashCardBoard.css"

const deckReact = [
    {
        perguntas: "O que é JSX?",
        respostas: "Uma estensão de linguagem Javascript"
    },
    {
        perguntas: "O React é ___",
        respostas: "Uma biblioteca Javascript para construção de interfaces"
    },
    {
        perguntas: "Componentes devem iniciar com ___",
        respostas: "letra maiúscula"
    },
    {
        perguntas: "Podemos colocar ___ dentro do JSX",
        respostas: "expressões"
    },
    {
        perguntas: "O ReactDOM nos ajuda ___",
        respostas: "interagindo com a DOM para dolocar componentes React na mesma"
    },
    {
        perguntas: "Usamos o npm para ___",
        respostas: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        perguntas: "Usamos props para ___",
        respostas: "passar diferentes informações para componentes"
    },
    {
        perguntas: "Usamos estado (state) para ___",
        respostas: "dizer  para o React quais informaçoes quando atualizadas devem renderizar a tela novamente"
    }
]


export default function FlashCardBoard({ setResultado, setPaginaAtual, indice, setIndice }) {
    const [estadoCarta, setEstadoCarta] = useState('frente')
    const [resposta, setResposta] = useState('')
    const [incorretoCount, setIncorretoCount] = useState(0)

    function virarFrente() {
        setEstadoCarta('tras')
    }

    function virarVerso() {

        if(indice === deckReact.length-1) {
        
            if(incorretoCount > 0) {
                setResultado('fracasso')
            } else {
                setResultado('sucesso')
            }
    
            setPaginaAtual('fim')
    
        } else {
            setIndice(indice + 1)
            setEstadoCarta('frente')
            setResposta('')

        }

    }

    function handleIncorreto() {
        setIncorretoCount(incorretoCount+1)
        console.log(incorretoCount)
        setResposta('nao-lembrei')
    }

    return (
        <div className="flash-card-board">
            <div className="logo-mini">
                <img src={LogoMini} alt="" />
            </div>
            
            <div data-indentifier="flashcard" className={`flash-card ${resposta}`}>
                <span data-identifier="counter">{indice+1}/{deckReact.length}</span>
                {estadoCarta === 'frente' ? 
                    <>
                        <div className={`${estadoCarta}`}>
                            <p>{deckReact[indice].perguntas}</p>
                            <img data-identifier="arrow" src={Turn} onClick={virarFrente} alt="next" />
                        </div>
                    </>
                :
                    <> 
                        <div className={`${estadoCarta}`}>
                            <p className="titulo-tras">{deckReact[indice].perguntas}</p>
                            <p className="text-content">{deckReact[indice].respostas}</p>

                            {resposta === '' ? 
                                <div className="buttons">
                                    <button onClick={() => setResposta('aprendi-agora')}>Aprendi agora</button>
                                    <button onClick={handleIncorreto}>Não lembrei</button>
                                    <button onClick={() => setResposta('lembrei-esforco')}>Lembrei com esforço</button>
                                    <button onClick={() => setResposta('zap')}>Zap!</button>
                                </div>
                            :
                                <div className="seta">
                                    <img data-identifier="arrow" src={Turn} onClick={virarVerso} alt="next" />
                                </div>
                            
                            }
                        </div>
                    </>    
                }
            </div>
            
        </div>
    )
}