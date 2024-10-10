import { Fragment, useState} from 'react'

import './App.css'
import Bienvenida from './components/Bienvenida/Bienvenida'
import Formulario from './components/Formulario/Formulario'
import Resultado from './components/Resultado/Resultado';

function App() {
  const [votosPython, setVotosPython] = useState(0);
  const [votosJava, setVotosJava] = useState(0);
  const [votosKotlin, setVotosKotlin] = useState(0);

  return (
    <Fragment>
      <Bienvenida/>
      <div className='d-flex justify-conten-center'>
      <Formulario setVotosPython={setVotosPython} setVotosJava={setVotosJava} setVotosKotlin={setVotosKotlin} />
      <Resultado votosPython={votosPython} votosJava={votosJava} votosKotlin={votosKotlin} />
      </div>
      
    </Fragment>
  )
}

export default App
