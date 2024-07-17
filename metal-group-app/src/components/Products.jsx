import React from 'react'
import ProductCard from '@/components/ProductCard'
import styles from '@/styles/MainProducts.module.css'
import { VscListSelection } from 'react-icons/vsc'

const Products = () => {
	const products = [
		{ id: 1, title: 'Rebars', image: '/squarebars.webp' },
		{ id: 2, title: 'Rebars', image: '/squareprofile.webp' },
		{ id: 3, title: 'Rebars', image: '/steelpipe.webp' },
		{ id: 4, title: 'Rebars', image: '/steelsheet.webp' },
		{ id: 5, title: 'Rebars', image: '/uprofile.webp' },
		{ id: 6, title: 'Rebars', image: '/rebar.avif' },
		{ id: 7, title: 'Rebars', image: '/roundbar.webp' },
		{ id: 8, title: 'Rebars', image: '/flatbars.webp' },
		{ id: 9, title: 'Rebars', image: '/chequeredsteelsheet.jpg' },
		{ id: 10, title: 'Rebars', image: '/equalangles.webp' },
		{ id: 11, title: 'Rebars', image: '/iprofile.jpg' },
	]

	return (
		<div className={styles.container}>
			<div className={styles.productsHeader}>
				<h1>Products</h1>
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