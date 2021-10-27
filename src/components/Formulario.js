import React, {useState} from 'react'
import Error from './Error.js'
import shortid from 'shortid';
// import PropTypes from 'prop-types'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

	// definir state
	const [nombre, guardarNombre] = useState('');
	const [cantidad, guardarCantidad] = useState('');
	const [error, guardarError] = useState(false);

	function agregarGasto(e) {
		e.preventDefault();

		// Validar
		if (nombre.trim() === '' || cantidad < 1 || isNaN(cantidad)) {
			guardarError(true)
			return;
		} else guardarError(false)

		// Contruir
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate()
		}
		// Pasar
		guardarGasto(gasto);
		guardarCrearGasto(true);

		// Resetear
		guardarNombre('');
		guardarCantidad(0);
	}


	return (
		<React.Fragment>
		<form
			onSubmit={agregarGasto}
			className="form-group"
		>
			<h2>Agrega tus gastos aqui</h2>
			{ error ?
				<Error
					mensaje="Campos obligatorios y/o gasto positivo"
				/> :  null }
			<div className="campo">
				<label htmlFor="name">Nombre Gasto</label>
				<input
					type="text"
					name="name"
					id="name"
					className="form-control"
					placeholder="Ej. Internet"
					value={nombre}
					onChange={ e => guardarNombre(e.target.value )}
				/>
			</div>

			<div className="campo">
				<label htmlFor="gasto">Cantidad Gasto</label>
				<input
					type="number"
					name="gasto"
					id="gasto"
					className="form-control"
					placeholder="Ej. Internet"
					value={cantidad}
					onChange={ e => guardarCantidad( parseInt(e.target.value) )}
				/>
			</div>

			<button
				type="submit"
				className="btn btn-secondary w-100"
				value="Agregar gasto"
			>Submit
			</button>
		</form>
		</React.Fragment>
	)
}

// Formulario.propTypes = {

// }

export default Formulario