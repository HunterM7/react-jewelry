import React from 'react'

import catalog from '../../catalog'
import CatalogItem from '../../components/CatalogItem/CatalogItem'

const Shop = () => {
	return (
		<div>
			<h1>Shop page</h1>

			{catalog.map((el) => {
				return <CatalogItem {...el} />
			})}
		</div>
	)
}

export default Shop
