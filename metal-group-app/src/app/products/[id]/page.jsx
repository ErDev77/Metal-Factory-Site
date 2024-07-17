'use client'

import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import styles from '@/styles/ProductPage.module.css'

const ProductPage = () => {
	const params = useParams()
	const { id } = params

	if (!id) {
		return <p>Loading...</p>
	}

	const product = {
		id: id,
		title: 'Product Title',
		image: {
			avif: '/product-image.avif',
			webp: '/product-image.webp',
			default: '/product-image.jpg',
		},
		lengthOptions: ['Option 1', 'Option 2', 'Option 3'],
	}

	const addToCart = () => {
		// Logic for adding product to cart
	}

	return (
		<div>
			<Header />
			<div className={styles.productPage}>
				<ProductCard
					product={product}
					showDetails={true}
					addToCart={addToCart}
				/>
				<div className={styles.productDetails}>
					<h2>{product.title}</h2>
					<picture>
						<source srcSet={product.image.avif} type='image/avif' />
						<source srcSet={product.image.webp} type='image/webp' />
						<img src={product.image.default} alt={product.title} />
					</picture>
					<div className={styles.lengthOptions}>
						<h3>Choose Length:</h3>
						<ul>
							{product.lengthOptions.map((option, index) => (
								<li key={index}>{option}</li>
							))}
						</ul>
					</div>
					<button onClick={addToCart}>Add to Cart</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ProductPage
