import React from 'react'

import styles from './CatalogItem.module.scss'

const CatalogItem = ({
	imgUrl,
	title,
	price,
	oldPrice,
	quantity,
}) => {
	let infoBox = ''
	const isSold = !quantity

	isSold && (infoBox = 'Sold out')

	oldPrice > price &&
		!isSold &&
		(infoBox = `- ${Math.round((1 - price / oldPrice) * 100)}%`)

	return (
		<div className={styles.wrapper}>
			<div
				className={`
				${styles.img}
				${isSold ? styles.sold : ''}
			`}
			>
				<img src={imgUrl} alt='Сережки' />
			</div>
			<h3 className={styles.title}>{title}</h3>
			<h4 className={styles.price}>{`$ ${price},00`}</h4>
			<div
				className={`
				${styles.discount}
				${infoBox ? styles.active : ''}
			`}
			>
				{infoBox}
			</div>
		</div>
	)
}

export default CatalogItem
