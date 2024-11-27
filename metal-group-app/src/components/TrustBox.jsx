import styles from '@/styles/TrustBox.module.css'
import { useTranslation } from 'react-i18next'
const TrustBox = () => {

	const { t, i18n } = useTranslation()

	return (
		<div className={styles.trustBoxContainer}>
			<div className={styles.overlay}></div>
			<div className={styles.trustText}>
				<h2>{t('trust_header')}...</h2>
				<ul>
					<li>{t('expert_staff')}</li>
					<li>{t('quality_services')}</li>
					<li>{t('cooperate_best')}</li>
				</ul>
			</div>
		</div>
	)
}

export default TrustBox
