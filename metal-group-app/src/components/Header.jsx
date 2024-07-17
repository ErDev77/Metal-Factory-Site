"use client"
import { CiShoppingCart } from 'react-icons/ci'
import styles from '@/styles/Header.module.css'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import enTranslations from '../locales/en/translation.json'
import ruTranslations from '../locales/ru/translation.json'
const Header = ({ lang }) => {
   const router = useRouter()
    const [locale, setLocale] = useState(lang || 'en')
	const translations = locale === 'en' ? enTranslations : ruTranslations
  useEffect(() => {
		setLocale(lang)
	}, [lang])
	return (
		<header className={styles.header}>
			<img src='/logo.jpg' alt='' />
			<nav className={styles.nav}>
				<a
					href='#'
					className={router.pathname === '/' ? 'active' : ''}
					onClick={() => router.push('/')}
				>
					{translations.Home}
				</a>
				<a
					href='#'
					className={router.pathname === '/services' ? 'active' : ''}
					onClick={() => router.push('/services')}
				>
					{translations.Services}
				</a>
				<a
					href='#'
					className={router.pathname === '/products' ? 'active' : ''}
					onClick={() => router.push('/products')}
				>
					{translations.Products}
				</a>
				<a
					href='#'
					className={router.pathname === '/about' ? 'active' : ''}
					onClick={() => router.push('/about')}
				>
					{translations.About_us}
				</a>
				<a
					href='#'
					className={router.pathname === '/cart' ? 'active' : ''}
					onClick={() => router.push('/cart')}
				>
					<span>
						{translations.Cart}
						<CiShoppingCart size={30} />
					</span>
				</a>
			</nav>
			<button onClick={() => setLocale(locale === 'en' ? 'ru' : 'en')}>
				{locale === 'en' ? 'Switch to RU' : 'Switch to EN'}
			</button>
		</header>
	)
}

export default Header;
