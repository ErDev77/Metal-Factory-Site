'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/ProductPage.module.css'
import ScrollToTop from 'react-scroll-to-top'
import { FiChevronUp } from 'react-icons/fi'
import products from '../../../../products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
import LoadingPage from '@/components/LoadingPage'
import { Snackbar, Alert } from '@mui/material'
import { useTranslation } from 'react-i18next'

export async function generateStaticParams() {
	return products.map(product => ({
		id: product.id.toString(), 
	}))
}

const ProductPage = () => {
	const { t, i18n } = useTranslation()
	const [loading, setLoading] = useState(true)
	const params = useParams()
	const { id } = params
	const dispatch = useDispatch()
	const [activeTab, setActiveTab] = useState('specs')
	const [isLengthOptionsVisible, setIsLengthOptionsVisible] = useState(false)
	const [deliveryMethod, setDeliveryMethod] = useState('')
	const [quantity, setQuantity] = useState(1)
	const [openSnackbar, setOpenSnackbar] = useState(false)
	const [snackbarMessage, setSnackbarMessage] = useState('')
	const foundProduct = products.find(p => p.id === parseInt(id))
	const [selectedSize, setSelectedSize] = useState(foundProduct.sizes[0].value)
	const lengthOptionsRef = useRef(null)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		const handleClickOutside = event => {
			if (
				lengthOptionsRef.current &&
				!lengthOptionsRef.current.contains(event.target)
			) {
				setIsLengthOptionsVisible(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	if (!foundProduct) {
		return <p>Product not found</p>
	}

	if (loading) {
		return <LoadingPage />
	}

	

	const handleAddToCart = () => {
		const productToAdd = {
			...foundProduct,
			selectedSize,
			deliveryMethod,
			quantity,
			sizeUnit: foundProduct.sizes.find(size => size.value === selectedSize)
				?.unit,
		}
		dispatch(addToCart(productToAdd))
		setSnackbarMessage(`${t(foundProduct.title)} ${t('added_cart')}`)
		setOpenSnackbar(true)
	}

	const toggleLengthOptions = () => {
		setIsLengthOptionsVisible(!isLengthOptionsVisible)
	}

	const selectSize = size => {
		setSelectedSize(size)
		setIsLengthOptionsVisible(false)
	}

	const incrementQuantity = () => {
		setQuantity(quantity + 1)
	}

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false)
	}

	return (
		<div>
			<Header />
			<div className={styles.productPage}>
				<div className={styles.productImageContainer}>
					<picture>
						<source srcSet={foundProduct.image} type='image/webp' />
						<img
							src={foundProduct.image}
							alt={foundProduct.title}
							className={styles.productImage}
							onError={e => console.error('Image failed to load:', e)}
						/>
					</picture>
				</div>
				<div className={styles.productDetails}>
					<h2>{t(foundProduct.title)}</h2>
					<div className={styles.inStock}>{t('in_stock')}</div>
					<div className={styles.getDeliveryText}>
						{t('how_to_get_this_item')}
					</div>
					<div className={styles.deliveryOptions}>
						<label>
							<input
								type='radio'
								name='delivery'
								value='delivery'
								checked={deliveryMethod === 'delivery'}
								onChange={() => setDeliveryMethod('delivery')}
							/>
							{t('delivery')}
						</label>
						<label>
							<input
								type='radio'
								name='delivery'
								value='pickup'
								checked={deliveryMethod === 'pickup'}
								onChange={() => setDeliveryMethod('pickup')}
							/>
							{t('pickup')}
						</label>
					</div>
					<div className={styles.lengthOptions} ref={lengthOptionsRef}>
						<h3 onClick={toggleLengthOptions}>{t('choose_size')}</h3>
						<span className={styles.sizeText}>
							({selectedSize}{' '}
							{t(
								foundProduct.sizes.find(size => size.value === selectedSize)
									.unit
							)}
							)
						</span>
						<div className={styles.quantitySelector}>
							<button onClick={decrementQuantity}>-</button>
							<span>{quantity}</span>
							<button onClick={incrementQuantity}>+</button>
						</div>
						<div
							className={
								isLengthOptionsVisible
									? styles.lengthOptionsContent + ' ' + styles.visible
									: styles.lengthOptionsContent
							}
						>
							<ul>
								{foundProduct.sizes.map((size, index) => (
									<li
										key={index}
										className={
											selectedSize === size.value ? styles.selectedSize : ''
										}
										onClick={() => selectSize(size.value)}
									>
										{size.value}
									</li>
								))}
							</ul>
						</div>
					</div>
					<button className={styles.addToButton} onClick={handleAddToCart}>
						{t('add_to_cart')}
					</button>
				</div>
			</div>

			<div className={styles.tabContainer}>
				<div
					className={`${styles.tabButton} ${
						activeTab === 'description' ? styles.active : ''
					}`}
					onClick={() => setActiveTab('description')}
				>
					{t('description')}
				</div>
				<div
					className={`${styles.tabButton} ${
						activeTab === 'specs' ? styles.active : ''
					}`}
					onClick={() => setActiveTab('specs')}
				>
					{t('specifications')}
				</div>
			</div>

			<div
				className={`${styles.tabContent} ${
					activeTab === 'description' ? styles.active : ''
				}`}
			>
				<div className={styles.productDescription}>
					<h4>{t('description')}</h4>
					<p>{t(foundProduct.description[i18n.language])}</p>
				</div>
			</div>
			<div
				className={`${styles.tabContent} ${
					activeTab === 'specs' ? styles.active : ''
				}`}
			>
				<div className={styles.productSpecs}>
					<h4>{t('specifications')}</h4>
					<ul>
						{foundProduct.specifications[i18n.language].map((spec, index) => (
							<li key={index}>{spec}</li>
						))}
					</ul>
				</div>
			</div>
			<ScrollToTop smooth component={<FiChevronUp size={25} color='blue' />} />
			<Footer />
			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert onClose={handleCloseSnackbar} severity='success'>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</div>
	)
}

export default ProductPage
