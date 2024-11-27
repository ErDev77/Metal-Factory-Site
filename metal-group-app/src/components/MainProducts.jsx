import React from 'react'
import ProductCard from '@/components/ProductCard'
import styles from '@/styles/MainProducts.module.css'
import { VscListSelection } from 'react-icons/vsc'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
const MainProducts = () => {
	const { t, i18n } = useTranslation()

	const router = useRouter()
	const products = [
		{ id: 1, title: t('square_bars'), image: '/squarebars.jpg' },
		{ id: 2, title: t('square_profile'), image: '/squareprofile.jpg' },
		{ id: 3, title: t('steel_pipe'), image: '/steelpipe.webp' },
		{ id: 4, title: t('steel_sheet'), image: '/steelsheet.jpg' },
		{ id: 5, title: t('u_profile'), image: '/uprofile.webp' },
		{ id: 6, title: t('rebars'), image: '/rebar.avif' },
		{ id: 7, title: t('round_bars'), image: '/roundbars.jpg' },
		{ id: 8, title: t('flat_bars'), image: '/flatbars.webp' },
	]

	return (
		<div className={styles.container}>
			<div className={styles.productsHeader}>
				<h1>{t('products')}</h1>
				<span>
					<VscListSelection size={30}/>
				</span>
			</div>
			<div className={styles.productsContainer}>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			
			<button onClick={() => router.push('/products')}>{t('view_all')}</button>
		</div>
	)
}

export default MainProducts
