// utils/getTranslation.js
import en from '../locales/en/translation.json'
import ru from '../locales/ru/translation.json'

const translations = {
	en,
	ru,
}

export const getTranslation = (locale, key) => {
	return translations[locale][key] || key
}
