import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta.js'
import Formulario from './components/Formulario.js'
import Listado from './components/Listado.js'
import ControlPresupuesto from './components/ControlPresupuesto.js'

function App() {

  // definir state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false)

  // effect para restante
  useEffect(() => {
    if (creargasto) {

      // Nuevo Presupuesto
      guardarGastos([
      ...gastos,
      gasto
      ]);

      // Presupuesto Actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // Resetear
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante])

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
              <Formulario
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>

            <div className="col">
              <Listado
                gastos={gastos}
              />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )
      }
      </div>


    </div>
  );
}

export default App;
