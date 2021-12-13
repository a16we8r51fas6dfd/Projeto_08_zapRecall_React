import LogoMini from "./assets/logo-mini.png"
import Next from "./assets/next.png"
import "./Fim.css"

export default function Fim({ resultado, setPaginaAtual, setIndice }) {

    function reset() {
        setPaginaAtual('home')
        setIndice(0)
    }


    return (
        <>
           <div className="mensagem">
                <div className="logo-mini">
                    <img src={LogoMini} alt="" />
                </div>
                {resultado === 'sucesso' ? 
                    <>
                        <h1>PARABÉNS 🥳</h1>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </>
                    : 
                    <>
                        <h1>PUTZ... 😢</h1>
                        <p>Você esqueceu alguns flashcards.. <br/>Não desanime! Na próxima você consegue!</p>
                    </>
                }
                <button onClick={reset}>Tentar novamente <img src={Next} alt="next" /></button>
                
            </div>
        </>
    )     
}