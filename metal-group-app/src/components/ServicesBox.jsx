import styles from '@/styles/ServicesBox.module.css'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { IoMdTime } from 'react-icons/io'
import React from 'react'
import { useTranslation } from 'react-i18next'
const ServicesBox = () => {
		const { t, i18n } = useTranslation()

	return (
		<div className={styles.servicesBoxContainer}>
			<div className={styles.overlay}></div>
			<div className={styles.servicesText}>
				<h2>{t('services_header')}</h2>
				<ul>
					<li>
						<LiaShippingFastSolid size={60} />
						{t('we_have_delivery')}
					</li>
					<li>
						<IoMdTime size={60} />
						{t('work_time')}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ServicesBox
