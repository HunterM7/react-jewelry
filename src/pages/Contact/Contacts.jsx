import React from 'react'

import styles from './Contacts.module.scss'

const Contacts = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Contact Us</h1>
				<h3 className={styles.text}>
					Say Hello send us your thoughts about our products or share
					your ideas with our Team!
				</h3>
			</div>
		</div>
	)
}

export default Contacts
