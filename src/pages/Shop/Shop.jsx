import React from 'react'

import styles from './Shop.module.scss'

import catalog from '../../catalog'
import CatalogItem from '../../components/CatalogItem/CatalogItem'

const Shop = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Shop The Latest</h1>

			<div className={styles.grid}>
				<aside className={styles.grid__aside}></aside>

				<ul className={styles.catalog}>
					{catalog.map((el, i) => {
						return (
							<li key={i} className={styles.catalog__item}>
								<CatalogItem {...el} />
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Shop
