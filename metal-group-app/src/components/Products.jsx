import React from 'react'
import ProductCard from '@/components/ProductCard'
import styles from '@/styles/MainProducts.module.css'
import { VscListSelection } from 'react-icons/vsc'
import { useTranslation } from 'react-i18next'
const Products = () => {
	const { t, i18n } = useTranslation()

	const products = [
		{ id: 1, title: t('square_bars'), image: '/squarebars.jpg' },
		{ id: 2, title: t('square_profile'), image: '/squareprofile.jpg' },
		{ id: 3, title: t('steel_pipe'), image: '/steelpipe.webp' },
		{ id: 4, title: t('steel_sheet'), image: '/steelsheet.jpg' },
		{ id: 5, title: t('u_profile'), image: '/uprofile.webp' },
		{ id: 6, title: t('rebars'), image: '/rebar.avif' },
		{ id: 7, title: t('round_bars'), image: '/roundbars.jpg' },
		{ id: 8, title: t('flat_bars'), image: '/flatbars.webp' },
		{
			id: 9,
			title: t('chequered_steel_sheet'),
			image: '/chequeredsteelsheet.jpg',
		},
		{ id: 10, title: t('equal_angles'), image: '/equalangles.jpg' },
		{ id: 11, title: t('i_profile'), image: '/iprofile.jpg' },
	]

	return (
		<div className={styles.container}>
			<div className={styles.productsHeader}>
				<h1>{t('products')}</h1>
				<span>
					<VscListSelection size={30} />
				</span>
			</div>
			<div className={styles.productsContainer}>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default Products;
