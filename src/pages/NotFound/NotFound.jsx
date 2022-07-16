import React from 'react'

import styles from './NotFound.module.scss'

import Button from '../../components/Button/Button'

const NotFound = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>404 ERROR</h1>
			<p className={styles.text}>
				This page not found;
				<br />
				back to home and start again
			</p>
			<div className={styles.btn}>
				<Button text='HOMEPAGE' path='/' />
			</div>
		</div>
	)
}

export default NotFound
