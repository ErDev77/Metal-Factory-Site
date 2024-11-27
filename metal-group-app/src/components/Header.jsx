import { useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import styles from '@/styles/Header.module.css'
import { useRouter, usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { Link } from 'react-scroll'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
const Header = () => {
	const router = useRouter()
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { t, i18n } = useTranslation()

	const cartItems = useSelector(state => state.cart.items)
	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className={styles.header}>
			<div
				className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}
				onClick={handleMenuToggle}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<a href='/'>
				<img src='/lg5.png' alt='' className={styles.logoImg} />
			</a>
			<a
				href='#'
				className={pathname === '/cart' ? styles.active : ''}
				onClick={() => router.push('/cart')}
			>
				<span
					className={`${styles.cartButton} ${
						isMenuOpen ? styles.hideOnMobile : ''
					}`}
				>
					<CiShoppingCart size={30} color='white' />
					{totalItems > 0 && (
						<span className={styles.cartCount}>{totalItems}</span>
					)}
				</span>
			</a>
			{isMenuOpen && (
				<div className={styles.overlay} onClick={handleMenuToggle} />
			)}
			<nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
				<a
					href='#'
					className={pathname === '/' ? styles.active : ''}
					onClick={() => router.push('/')}
				>
					<p>{t('home')}</p>
				</a>
				<Link to='services' smooth={true} duration={500}>
					<p>{t('services')}</p>{' '}
				</Link>
				<a
					href='#'
					className={pathname === '/products' ? styles.active : ''}
					onClick={() => router.push('/products')}
				>
					<p>{t('products')}</p>
				</a>
				<a
					href='#'
					className={pathname === '/about' ? styles.active : ''}
					onClick={() => router.push('/about')}
				>
					<p>{t('about_us')}</p>
				</a>
				<a
					href='#'
					className={pathname === '/cart' ? styles.active : ''}
					onClick={() => router.push('/cart')}
				>
					<span>
						<p>{t('cart')}</p>
						<CiShoppingCart size={30} />
						{totalItems > 0 && (
							<span className={styles.cartCount}>{totalItems}</span>
						)}
					</span>
				</a>
				<div className={styles.languageSwitcher}>
					<LanguageSwitcher />
				</div>
			</nav>
		</header>
	)
}

export default Header
