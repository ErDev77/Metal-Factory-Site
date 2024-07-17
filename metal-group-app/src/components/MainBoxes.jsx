import styles from '@/styles/MainBoxes.module.css'
import { MdGppGood } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaClipboardList } from "react-icons/fa";
import enTranslations from '../locales/en/translation.json'
import ruTranslations from '../locales/ru/translation.json'
import { useState, useEffect } from 'react';
const MainBoxes = ({ lang }) => {
    const [locale, setLocale] = useState(lang || 'en')
	const translations = locale === 'en' ? enTranslations : ruTranslations

    return (
			<div className={styles.container}>
				<div className={styles.MainBox}>
					<span>
						<MdGppGood size={50} color='blue' />
					</span>
					<h1>{translations.Quality}</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
						placeat dolorem veniam ipsum nisi eligendi cumque earum totam ipsa
						quos necessitatibus id sunt quis temporibus, exercitationem
						praesentium vel dicta voluptatum?
					</p>
					<div className={styles.ReadMore}>
						<p>{translations.ReadMore}...</p>
						<FaArrowCircleRight color='blue' />
					</div>
				</div>
				<div className={styles.MainBox}>
					<span>
						<TbTruckDelivery size={50} color='blue' />
					</span>
					<h1>{translations.Delivery}</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
						placeat dolorem veniam ipsum nisi eligendi cumque earum totam ipsa
						quos necessitatibus id sunt quis temporibus, exercitationem
						praesentium vel dicta voluptatum?
					</p>
					<div className={styles.ReadMore}>
						<p>{translations.ReadMore}...</p>
						<FaArrowCircleRight color='blue' />
					</div>
				</div>
				<div className={styles.MainBox}>
					<span>
						<FaClipboardList size={50} color='blue' />
					</span>
					<h1>{translations.Selection}</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
						placeat dolorem veniam ipsum nisi eligendi cumque earum totam ipsa
						quos necessitatibus id sunt quis temporibus, exercitationem
						praesentium vel dicta voluptatum?
					</p>
					<div className={styles.ReadMore}>
						<p>{translations.ReadMore}...</p>
						<FaArrowCircleRight color='blue' />
					</div>
				</div>
			</div>
		)
}

export default MainBoxes