import { Fragment } from "react"
import PropTypes from "prop-types";

/*
Los variables que se tengan que poner en el jsx deben de ir entre una sola llave
*/
const Resultado = ({ votosPython, votosJava, votosKotlin }) => {
    return (
        <Fragment>
            <div>
                <div className="card">
                    <div className="card-title">
                        <h4>Vota por tu lenguaje favorito</h4>
                    </div>
                    <div className="card-body">
                        <div className="row d-flex justify-content-center">
                            <div className="col 2">
                                <h5>Python</h5>
                                {votosPython}
                            </div>
                            <div className="col 2">
                                <h5>Java</h5>
                                {votosJava}
                            </div>
                            <div className="col 2">
                                <h5>Kotlin</h5>
                                {votosKotlin}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Resultado.propTypes = {
    votosPython: PropTypes.number,
    votosJava: PropTypes.number,
    votosKotlin: PropTypes.number,

};

export default Resultado
