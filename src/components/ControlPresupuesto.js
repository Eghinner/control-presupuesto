import React from 'react'

const ControlPresupuesto = ({presupuesto, restante}) => {
	return (
		<React.Fragment>
			<div className="alert alert-secondary">
				Presupuesto: {presupuesto}
			</div>

			<div className="alert alert-success">
				Restante: {restante}
			</div>
		</React.Fragment>
	)
}

export default ControlPresupuesto