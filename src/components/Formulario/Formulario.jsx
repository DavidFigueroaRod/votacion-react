import { Fragment, useState } from "react"
import "./Formulario.css"
import PropTypes from "prop-types";





const Formulario = ({setVotosPython, setVotosJava, setVotosKotlin}) => {
    const [idVoto, setIdVoto] = useState(0);

    const handleVotos = (idVoto) => {
        switch (idVoto) {
            case 1:
                setVotosPython(prevVotos => prevVotos + 1);
                break;
            case 2:
                setVotosJava(prevVotos => prevVotos + 1);
                break;
            case 3:
                setVotosKotlin(prevVotos => prevVotos + 1);
                break;
            default:
                break;
        }
    };
    
    const handleValue = (id) => {
        setIdVoto(id);
       
    };

    
    return (
        <Fragment>
            <div className="form-check">
                <div className="card">
                    <div className="card-title">
                        <h4>Vota por tu lenguaje favorito</h4>
                    </div>
                    <div className="card-body">
                        <div className="row d-flex justify-content-center">
                            <div className="col 2">
                                <h5>Python</h5>
                                <img className="imagen" src="https://cdn.svgporn.com/logos/python.svg" alt="" />
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={1} onClick={() => handleValue(1)}></input>
                            </div>
                            <div className="col 2">
                                <h5>Java</h5>
                                <img className="imagen" src="https://cdn.svgporn.com/logos/java.svg" alt="" />
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={2} onClick={() => handleValue(2)}></input>
                            </div>
                            <div className="col 2">
                                <h5>Kotlin</h5>
                                <img className="imagen" src="https://cdn.svgporn.com/logos/kotlin-icon.svg" alt=""/>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={3} onClick={() => handleValue(3)}></input>
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="btn btn-primary" onClick={() =>  handleVotos(idVoto)} >Votar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Formulario.propTypes = {
    setVotosPython: PropTypes.func,
    setVotosJava: PropTypes.func,
    setVotosKotlin: PropTypes.func,
  
  };

export default Formulario
