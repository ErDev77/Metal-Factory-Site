import React from 'react'
import styles from '@/styles/ProductCard.module.css'

const ProductCard = ({ product }) => {
	return (
		<a href={`/products/${product.id}`} className={styles.productCard}>
			<div className={styles.imageBox}>
				<img
					src={product.image}
					alt={product.title}
					className={styles.productImage}
				/>
			</div>
			<div className={styles.productInfo}>
				<div className={styles.productBox}>
					<div className={styles.productTitle}>{product.title}</div>
				</div>
			</div>
		</a>
	)
}

export default ProductCard
