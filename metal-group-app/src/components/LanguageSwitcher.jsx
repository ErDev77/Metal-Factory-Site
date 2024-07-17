// // components/LanguageSwitcher.jsx
// import React from 'react'
// import { useTranslation } from 'next-translate'

// const LanguageSwitcher = () => {
// 	const { lang, t, setLang } = useTranslation()

// 	const changeLanguage = newLang => {
// 		setLang(newLang)
// 	}

// 	return (
// 		<div className='language-switcher'>
// 			<button
// 				onClick={() => changeLanguage('en')}
// 				className={lang === 'en' ? 'active' : ''}
// 			>
// 				English
// 			</button>
// 			<button
// 				onClick={() => changeLanguage('ru')}
// 				className={lang === 'ru' ? 'active' : ''}
// 			>
// 				Русский
// 			</button>
// 			{/* Добавьте другие языки, если необходимо */}
// 		</div>
// 	)
// }

// export default LanguageSwitcher
