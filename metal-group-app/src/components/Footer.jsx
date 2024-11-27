"use client"

import styles from '@/styles/Footer.module.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
const Footer = () => {
	const { t, i18n } = useTranslation()

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logoSection}>
					<img src='/lg5.png' alt='' className={styles.logo} />
					<h3>{t('follow_us')}</h3>
					<div className={styles.socialIcons}>
						<a href='#'>
							<FaFacebook className={styles.icon} />
						</a>
						<a href='#'>
							<FaInstagram className={styles.icon} />
						</a>
						<a href='#'>
							<FaYoutube className={styles.icon} />
						</a>
					</div>
				</div>
				<div className={styles.verticalLine}></div>
				<div className={styles.addressSection}>
					<h3>{t('address')}</h3>
					<p className={styles.iconText}>
						<FaMapMarkerAlt className={styles.iconSpacing} color='blue' />
						{t('address_text')}
					</p>
					<div className={styles.addressSectionLine}></div>
					<div className={styles.map}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.6937980707964!2d41.638811535747706!3d41.63662945641354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067861b3481058b%3A0x45971a8e725f772a!2zOTcgQmFncmF0aW9uaSBTdCwgQmF0dW1pLCDQk9GA0YPQt9C40Y8!5e1!3m2!1sru!2sam!4v1722377622399!5m2!1sru!2sam'
							width='600'
							height='250'
							style={{ border: '0' }}
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
				<div className={styles.verticalLine}></div>
				<div className={styles.contactsSection}>
					<h3>{t('contacts')}</h3>
					<p className={styles.iconText}>
						<FaPhoneSquareAlt className={styles.iconSpacing} color='blue' />
						+995 574 974 999
					</p>
					<p className={styles.iconText}>
						<FaPhoneSquareAlt className={styles.iconSpacing} color='blue' />
						+995 592 07 90 90
					</p>
					<div className={styles.contactsSectionLine}></div>
					<p className={styles.iconText}>
						<MdEmail className={styles.iconSpacing} color='blue' />
						metal.group.2021@gmail.com
					</p>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<div className={styles.footerBottomLine}></div>
				<p>&copy; {t('all_rights_reserved')}</p>
			</div>
		</footer>
	)
}

export default Footer
