import styles from '@/styles/MainBoxes.module.css'
import { MdGppGood } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaClipboardList } from "react-icons/fa";
import { GrCertificate } from 'react-icons/gr'

import { Trans, useTranslation } from 'react-i18next'
import Link from 'next/link';
const MainBoxes = () => {

	const { t, i18n } = useTranslation()

    return (
			<div className={styles.container}>
				<div className={styles.MainBox}>
					<span>
						<GrCertificate size={50} color='blue' />
					</span>
					<h1>{t('best_quality')}</h1>
					<p>{t('best_quality_text')}</p>
					<div className={styles.ReadMore}>
						<p>{t('read_more')}...</p>
						<a href='/about'>
							<FaArrowCircleRight color='blue' />
						</a>
					</div>
				</div>
				<div className={styles.MainBox}>
					<span>
						<MdGppGood size={50} color='blue' />
					</span>
					<h1>{t('market_experience')}</h1>
					<p>{t('market_experience_text')}</p>
					<div className={styles.ReadMore}>
						<p>{t('read_more')}...</p>
						<a href='/about'>
							<FaArrowCircleRight color='blue' />
						</a>
					</div>
				</div>
				<div className={styles.MainBox}>
					<span>
						<FaClipboardList size={50} color='blue' />
					</span>
					<h1>{t('huge_selection')}</h1>
					<p>{t('huge_selection_text')}</p>
					<div className={styles.ReadMore}>
						<p>{t('read_more')}...</p>
						<a href='/products'>
							<FaArrowCircleRight color='blue' />
						</a>
					</div>
				</div>
			</div>
		)
}

export default MainBoxes