import Logo from "./assets/logo.png"
import Next from "./assets/next.png"
import "./Home.css"

export default function Home({ setPaginaAtual }) {

    function handleTela() {
        setPaginaAtual('flash-card-board')
    }
 
    return (
        <div className="home">
            <img src={Logo} alt="logo"></img>
            <button data-identifier="start-zap-recall" onClick={handleTela}>Praticar React <img src={Next} alt="next" /></button>
        </div>
    )
}
