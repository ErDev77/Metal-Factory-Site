"use client"

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateCartItem } from '../../redux/cartSlice'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/CartPage.module.css'
import { CiCircleQuestion } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import { TbEdit } from 'react-icons/tb'
import ScrollToTop from 'react-scroll-to-top'
import { FiChevronUp } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import LoadingPage from '@/components/LoadingPage'
import EditCartItemModal from '@/components/EditCartItemModal'
import { useTranslation } from 'react-i18next'

const CartPage = () => {
	const { t, i18n } = useTranslation()
	const [loading, setLoading] = useState(true)
	const [editingItem, setEditingItem] = useState(null)
	const cart = useSelector(state => state.cart.items)
	const dispatch = useDispatch()
	const router = useRouter()

	const handleRemoveFromCart = item => {
		dispatch(removeFromCart({ cartItemId: item.cartItemId }))
	}

	const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return <LoadingPage />
	}

	const handleEditItem = item => {
		setEditingItem(item)
	}

	const handleSaveEdit = updatedItem => {
		dispatch(updateCartItem(updatedItem))
		setEditingItem(null)
	}

	const getDeliveryMethod = method => {
		return t(method)
	}

	const getSizeUnit = unit => {
		return t(unit)
	}

	return (
		<div className={styles.pageContainer}>
			<Header />
			<div className={styles.cartContainer}>
				<h1 className={styles.cartHeader}>{t('your_cart')}</h1>
				{cart.length === 0 ? (
					<div className={styles.emptyBox}>
						<img
							width='100'
							height='100'
							src='https://img.icons8.com/dotty/80/228BE6/shopping-cart.png'
							alt='shopping-cart'
						/>
						<h2>{t('empty_cart')}</h2>
						<button
							className={styles.shopNowButton}
							onClick={() => router.push('/products')}
						>
							{t('shop_now')}
						</button>
					</div>
				) : (
					<div className={styles.cartItemsWrapper}>
						<div className={styles.cartItems}>
							{cart.map((item, index) => (
								<div key={item.cartItemId} className={styles.cartItem}>
									<img src={item.image} alt={item.title} />
									<div className={styles.cartItemDetails}>
										<h3 className={styles.cartItemTitle}>{t(item.title)}</h3>
										<p className={styles.cartItemInfo}>
											{t('size')} {item.selectedSize}{' '}
											{t(
												item.sizes.find(size => size.value === item.selectedSize)
													.unit
											)}
										</p>
										<p className={styles.cartItemInfo}>
											{t('delivery_method')}{' '}
											{getDeliveryMethod(item.deliveryMethod)}
										</p>
										<p className={styles.cartItemInfo}>
											{t('quantity')} {item.quantity}
										</p>
										<div className={styles.cartItemActions}>
											<span
												className={styles.removeButton}
												onClick={() => handleRemoveFromCart(item)}
											>
												<MdDeleteOutline size={25} />
											</span>
											<span
												className={styles.editButton}
												onClick={() => handleEditItem(item)}
											>
												<TbEdit size={25} />
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={styles.proceedButtonContainer}>
							<div className={styles.subtotalContainer}>
								<span className={styles.subtotalText}>{t('subtotal')}</span>
								<span className={styles.subtotalValue}>
									{itemCount} {t('items')}
								</span>
							</div>
							<p className={styles.infoText}>
								<CiCircleQuestion color='grey' size={18} />
								{t('info_text')}
							</p>
							<button
								className={styles.proceedButton}
								onClick={() => router.push('/checkout')}
							>
								{t('proceed_button')}
							</button>
						</div>
					</div>
				)}
			</div>
			{editingItem && (
				<EditCartItemModal
					item={editingItem}
					onClose={() => setEditingItem(null)}
					onSave={handleSaveEdit}
				/>
			)}
			<Footer />
			<ScrollToTop smooth component={<FiChevronUp size={25} color='blue' />} />
		</div>
	)
}

export default CartPage
