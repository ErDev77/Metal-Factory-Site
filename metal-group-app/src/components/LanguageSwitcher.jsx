import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'
import styles from '@/styles/Header.module.css'
import LoadingPage from './LoadingPage'

const LanguageSwitcher = () => {
	const { t } = useTranslation()
	const [loading, setLoading] = useState(true)

	
	const changeLanguage = language => {
		i18n.changeLanguage(language)
	}
	
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return <LoadingPage />
	}	

	
	return (
		<div className={styles.languageSwitcher}>
			<img
				src='/united-states.png'
				alt='English'
				className={styles.languageSwitcher__flag}
				onClick={() => changeLanguage('en')}
			/>
			<img
				src='/russ.png'
				alt='Russian'
				className={styles.languageSwitcher__flag}
				onClick={() => changeLanguage('ru')}
			/>
			<img
				src='/georg.png'
				alt='Georgian'
				className={styles.languageSwitcher__flag}
				onClick={() => changeLanguage('ka')}
			/>
		</div>
	)
}

export default LanguageSwitcher
