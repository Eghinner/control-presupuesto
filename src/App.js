import React, {useState} from 'react';
import Pregunta from './components/Pregunta.js'
import Formulario from './components/Formulario.js'

function App() {

  // definir state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header>
      <div
        className="contenido-principal contenido"
      >
      { mostrarpregunta ?
        (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
        )
        :
        (
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <Formulario/>
            </div>

            <div className="col">
              12
            </div>
          </div>
        )
      }
      </div>


    </div>
  );
}

export default App;
