import React, {useState} from 'react'
import Error from './Error.js'

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

	// definir state
	const [cantidad, guardarCantidad] = useState(0);
	const [error, guardarError] = useState(false)

	// Leer presupuesto
	function definirPresupuesto(e) {
		guardarCantidad(parseInt(e.target.value), 10);
	}

	// Submit del presupuesto
	function agregarPresupuesto(e) {
		e.preventDefault();

		// Validar
		if (cantidad < 1 || isNaN( cantidad )) {
			guardarError(true);
			return;
		}	else guardarError(false);
		// Pasar datos a presupuesto
		guardarPresupuesto(cantidad);
		guardarRestante(cantidad);
		actualizarPregunta(false);
	}

	return (
		<React.Fragment>
			<h2>Coloca tu presupuesto</h2>

			{ error ? <Error mensaje="El presupuesto es incorrecto"/> : null }

			<form
				onSubmit={agregarPresupuesto}
			>
				<input 
					type="number"
					className="w-100 form-control mb-3"
					placeholder="Presupuesto"
					onChange={definirPresupuesto}
				/>
				<input 
					type="submit"
					className="w-100 btn btn-secondary form-control"
					value="Definir presupuesto"
				/>
			</form>
		</React.Fragment>
	)
}

export default Pregunta