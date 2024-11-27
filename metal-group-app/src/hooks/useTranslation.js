import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const useTranslation = () => {
	const router = useRouter()
	const [locale, setLocale] = useState(router.locale || 'en')
	const [translations, setTranslations] = useState({})

	useEffect(() => {
		const loadTranslations = async () => {
			try {
				let path
				switch (locale) {
					case 'ru':
						path = '/locales/ru/common.json'
						break
					case 'ka':
						path = '/locales/ka/common.json'
						break
					default:
						path = '/locales/en/common.json'
				}
				const response = await fetch(path)
				if (!response.ok) {
					throw new Error(`Failed to fetch ${path}: ${response.statusText}`)
				}
				const data = await response.json()
				setTranslations(data)
			} catch (error) {
				console.error('Error loading translations:', error)
				setTranslations({})
			}
		}
		loadTranslations()
	}, [locale])

	const t = (key) => translations[key] || key

	return { t, locale, setLocale }
}

export default useTranslation
