import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

import searchIcon from '../../assets/img/search-icon.svg'
import cartIcon from '../../assets/img/cart-icon.svg'
import userIcon from '../../assets/img/user-icon.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<NavLink to='/' className={styles.header__logo}>
				SHOPPE
			</NavLink>
			<div className={styles.header__block}>
				<ul className={styles.links}>
					<li className={styles.links__item}>
						<NavLink to='shop'>Shop</NavLink>
					</li>
					<li className={styles.links__item}>
						<NavLink to='blog'>Blog</NavLink>
					</li>
					<li className={styles.links__item}>
						<NavLink to='our-story'>Our Story</NavLink>
					</li>
				</ul>
				<ul className={styles.icons}>
					<li className={styles.icons__item}>
						<img src={searchIcon} alt='Search' />
					</li>
					<li className={styles.icons__item}>
						<img src={cartIcon} alt='Cart' />
					</li>
					<li className={styles.icons__item}>
						<img src={userIcon} alt='Profile' />
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
