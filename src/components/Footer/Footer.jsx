import React from 'react'

import styles from './Footer.module.scss'

import mailingBtn from '../../assets/img/arrow.svg'
import linkedInIcon from '../../assets/img/linkedin-icon.svg'
import facebookIcon from '../../assets/img/fb-icon.svg'
import instagramIcon from '../../assets/img/inst-icon.svg'
import twitterIcon from '../../assets/img/twit-icon.svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.firstLine}>
				<ul className={styles.links}>
					<li className={styles.links__item}>CONTACT</li>
					<li className={styles.links__item}>TERMS OF SERVICES</li>
					<li className={styles.links__item}>SHIPPING AND RETURNS</li>
				</ul>
				<div className={styles.mailing}>
					<input
						type='email'
						placeholder='Give an email, get the newsletter.'
						className={styles.mailing__input}
					/>
					<button className={styles.mailing__btn}>
						<img src={mailingBtn} alt='Send an email' />
					</button>
				</div>
			</div>
			<div className={styles.secondLine}>
				<p className={styles.copyrigth}>
					© 2021 Shelly. Terms of use and privacy policy.
				</p>
				<ul className={styles.icons}>
					<li className={styles.icons__item}>
						<img src={linkedInIcon} alt='LinkedIn Icon' />
					</li>
					<li className={styles.icons__item}>
						<img src={facebookIcon} alt='Facebook Icon' />
					</li>
					<li className={styles.icons__item}>
						<img src={instagramIcon} alt='Instagram Icon' />
					</li>
					<li className={styles.icons__item}>
						<img src={twitterIcon} alt='Twitter Icon' />
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
