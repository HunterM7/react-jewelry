import React from 'react'

import styles from './Home.module.scss'
import slider1 from '../../assets/img/slider/slider-1.jpg'

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.slider}>
				<img
					className={styles.slider__img}
					src={slider1}
					alt='Slider items'
				/>
			</div>
		</div>
	)
}

export default Home
