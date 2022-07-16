import React from 'react'

import styles from './PrivacyPolicy.module.scss'

const PrivacyPolicy = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Privacy Policy</h1>
				<p className={styles.text}>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque
					aliquam, sollicitudin ante a, gravida arcu. Nam fringilla
					molestie velit, eget pellentesque risus scelerisque a. Nam
					ac urna maximus, tempor magna et, placerat urna. Curabitur
					eu magna enim. Proin placerat tortor lacus, ac sodales
					lectus placerat quis.
				</p>
				<h2 className={styles.subtitle}>Security</h2>
				<p className={styles.text}>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque
					aliquam, sollicitudin ante a, gravida arcu. Nam fringilla
					molestie velit, eget pellentesque risus scelerisque.
				</p>
				<h2 className={styles.subtitle}>Cookies</h2>
				<ul
					className={`
						marked-list
						${styles.list}
					`}
				>
					<li className={styles.list__item}>
						Duis rutrum dictum libero quis rutrum. Etiam sed neque
						aliquam, sollicitudin.
					</li>
					<li className={styles.list__item}>
						Nam fringilla molestie velit, eget pellentesque risus
						scelerisque a, gravida arcu.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default PrivacyPolicy
