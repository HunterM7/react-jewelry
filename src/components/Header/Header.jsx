import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

import searchIcon from '../../assets/img/icons/search-icon.svg'
import cartIcon from '../../assets/img/icons/cart-icon.svg'
import userIcon from '../../assets/img/icons/user-icon.svg'

const Header = () => {
	return (
		<div className={styles.header}>
			<NavLink to='/' className={styles.header__logo}>
				SHOPPE
			</NavLink>
			<div className={styles.header__block}>
				<ul className={styles.links}>
					<li className={styles.links__item}>
						<NavLink className={styles.links__link} to='shop'>
							Shop
						</NavLink>
					</li>
					<li className={styles.links__item}>
						<NavLink className={styles.links__link} to='blog'>
							Blog
						</NavLink>
					</li>
					<li className={styles.links__item}>
						<NavLink className={styles.links__link} to='our-story'>
							Our Story
						</NavLink>
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
		</div>
	)
}

export default Header
