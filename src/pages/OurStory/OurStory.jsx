import React from 'react'

import styles from './OurStory.module.scss'

import image1 from '../../assets/img/ourStory/Img-1.jpg'
import image2 from '../../assets/img/ourStory/Img-2.jpg'

const OurStory = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>About</h1>
				<h3 className={styles.subtitleH3}>
					Who we are and why we do what we do!
				</h3>
				<p className={styles.text}>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque
					aliquam, sollicitudin ante a, gravida arcu. Nam fringilla
					molestie velit, eget pellentesque risus scelerisque a. Nam
					ac urna maximus, tempor magna et, placerat urna. Curabitur
					eu magna enim. Proin placerat tortor lacus, ac sodales
					lectus placerat quis.{' '}
				</p>
				<h2 className={styles.subtitle}>Top trends</h2>
				<img src={image1} alt='Top trends' className={styles.img} />
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aliquam placerat, augue a volutpat hendrerit, sapien tortor
					faucibus augue, a maximus elit ex vitae libero. Sed quis
					mauris eget arcu facilisis consequat sed eu felis.
				</p>
				<ul
					className={`
						marked-list
						${styles.list}
					`}
				>
					<li className={styles.list__item}>
						consectetur adipiscing elit. Aliquam placerat
					</li>
					<li className={styles.list__item}>
						Lorem ipsum dolor sit amet consectetur
					</li>
				</ul>
				<h2 className={styles.subtitle}>Produced with care</h2>
				<img
					src={image2}
					alt='Produced with care'
					className={styles.img}
				/>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aliquam placerat, augue a volutpat hendrerit, sapien tortor
					faucibus augue, a maximus elit ex vitae libero. Sed quis
					mauris eget arcu facilisis consequat sed eu felis. Nunc sed
					porta augue. Morbi porta tempor odio, in molestie diam
					bibendu.
				</p>
			</div>
		</div>
	)
}
export default OurStory
