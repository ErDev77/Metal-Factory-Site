import React from 'react'
import styles from '@/styles/ProductCard.module.css'
import { BsCartPlus } from 'react-icons/bs'
import { BsCartCheck } from 'react-icons/bs'
import Link from 'next/link'

const ProductCard = ({ product }) => {
	const addToCart = () => {
	}

	return (
		<div className={styles.productCard}>
			<div className={styles.imageBox}>
				<Link href={`/products/${product.id}`}>
					<img
						src={product.image}
						alt={product.title}
						className={styles.productImage}
					/>
				</Link>
			</div>

			<div className={styles.productInfo}>
				<div className={styles.productBox}>
					<div className={styles.productTitle}>{product.title}</div>
				</div>
				<div className={styles.verticalLine}></div>
				<div className={styles.cartBox}>
					<span className={styles.addIcon}>
						<BsCartPlus size={30} color='white' />
					</span>
				</div>
				<div className={styles.addToCartMessage}>
					<span className={styles.checkIcon}>
						<BsCartCheck size={25} color='#254053' />
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProductCard;
