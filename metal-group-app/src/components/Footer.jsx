import styles from '@/styles/Footer.module.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logoSection}>
					<img src='/logo.jpg' alt='' className={styles.logo} />
					<h3>Follow us in social networks</h3>
					<div className={styles.socialIcons}>
						<a href='#'>
							<FaFacebook size={30} color='white' />
						</a>
						<a href='#'>
							<FaInstagram size={30} color='white' />
						</a>
						<a href='#'>
							<FaYoutube size={30} color='white' />
						</a>
					</div>
				</div>
				<div className={styles.verticalLine}></div>
				<div className={styles.addressSection}>
					<h3>Address</h3>
					<p>
						<FaMapMarkerAlt color='blue' />
						JJCF+VX4, Batumi
					</p>
					<div className={styles.addressSectionLine}></div>
					<div className={styles.map}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.5548304322283!2d41.62237867595026!3d41.622137271271015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406785f549a14fad%3A0x974e9d2d76f44862!2sMetal%20group!5e0!3m2!1sru!2sam!4v1721233382053!5m2!1sru!2sam'
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
					<h3>Contacts</h3>
					<p>
						<FaPhoneSquareAlt color='blue' />
						+995 (10) 43-00-12
					</p>
					<p>
						<FaPhoneSquareAlt color='blue' />
						+995 (10) 43-00-14
					</p>
					<div className={styles.contactsSectionLine}></div>
					<p>
						<MdEmail color='blue' />
						metalgroup@gmail.com
					</p>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<div className={styles.footerBottomLine}></div>
				<p>&copy; All Rights Reserved</p>
			</div>
		</footer>
	)
}

export default Footer
