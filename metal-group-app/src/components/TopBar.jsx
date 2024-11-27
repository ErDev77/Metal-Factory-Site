import styles from '@/styles/TopBar.module.css';
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const TopBar = () => {
	const { t, i18n } = useTranslation()

    return (
			<div className={styles.topBar}>
				<nav className={styles.nav}>
					<span>
						<FaMapMarkerAlt size={20} color='blue' />
						{t('address_text')}
					</span>
					<span>
						<FaPhoneSquareAlt size={20} color='blue' />
						+995592079090
					</span>
					<span>
						<MdEmail size={20} color='blue' />
						metal.group.2021@gmail.com
					</span>
				</nav>
			</div>
		)
}

export default TopBar;