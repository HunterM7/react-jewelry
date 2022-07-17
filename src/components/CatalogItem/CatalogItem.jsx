import React from 'react'

import styles from './CatalogItem.module.scss'

const CatalogItem = ({ imgUrl, title, price, oldPrice }) => {
	let discount = ''
	oldPrice > price &&
		(discount += `- ${Math.round((1 - price / oldPrice) * 100)}%`)

	return (
		<div className={styles.wrapper}>
			<img className={styles.img} src={imgUrl} alt='Сережки' />
			<h3 className={styles.title}>{title}</h3>
			<h4 className={styles.price}>{`$ ${price},00`}</h4>
			<div
				className={`
				${styles.discount}
				${discount ? styles.active : ''}
			`}
			>
				{discount}
			</div>
		</div>
	)
}

export default CatalogItem
