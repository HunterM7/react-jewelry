import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Button.module.scss'

const Button = ({ type = 1, text, path, action }) => {
	return path ? (
		<NavLink to={path}>
			<button
				className={`
				${styles.button}
				${styles[`button--type${type}`]}
			`}
			>
				{text}
			</button>
		</NavLink>
	) : (
		<button
			className={`
				${styles.button}
				${styles[`button--type${type}`]}
			`}
			onClick={action}
		>
			{text}
		</button>
	)
}

export default Button
