import React from 'react'

import styles from './CatalogItem.module.scss'

const CatalogItem = ({ imgUrl, title, price }) => {
	return (
		<div className={styles.wrapper}>
			<img className={styles.img} src={imgUrl} alt='' />
			<h3 className={styles.title}>{title}</h3>
			<h4 className={styles.price}>{`$ ${price}`}</h4>
		</div>
	)
}

export default CatalogItem
