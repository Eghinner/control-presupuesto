import React from 'react'
import Error from './Error.js'
import { revisarPresupuesto } from '../helpers.js'
import PropTypes from 'prop-types'

const ControlPresupuesto = ({presupuesto, restante}) => {
	return (
		<React.Fragment>
			{ restante < 0 ? <Error mensaje="Superaste tu presupuesto. Desconecta y vamonos 💥"/> : null }
			<div className="alert alert-secondary">
				Presupuesto: {presupuesto}
			</div>

			<div className={revisarPresupuesto(presupuesto,restante)}>
				Restante: {restante}
			</div>
		</React.Fragment>
	)
}

ControlPresupuesto.propTypes= {
	presupuesto: PropTypes.number.isRequired,
	restante: PropTypes.number.isRequired,
}

export default ControlPresupuesto