import React, { useState, useEffect } from 'react'
import styles from '@/styles/EditCartItemModal.module.css'
import { useTranslation } from 'react-i18next'

const EditCartItemModal = ({ item, onClose, onSave }) => {
	const [selectedSize, setSelectedSize] = useState(item.selectedSize)
	const [quantity, setQuantity] = useState(item.quantity)
	const [deliveryMethod, setDeliveryMethod] = useState(item.deliveryMethod)
	const { t, i18n } = useTranslation()

	useEffect(() => {
		setSelectedSize(item.selectedSize || '')
		setQuantity(item.quantity || 1)
		setDeliveryMethod(item.deliveryMethod || '')
	}, [item])

	const handleSave = () => {
		const updatedItem = {
			...item,
			selectedSize,
			quantity,
			deliveryMethod,
		}
		onSave(updatedItem)
		onClose()
	}

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<h2>{t('edit_item')}</h2>
				<div className={styles.formGroup}>
					<label>{t('size')}</label>
					<select
						value={selectedSize}
						onChange={e => setSelectedSize(e.target.value)}
					>
						{item.sizes && item.sizes.length > 0 ? (
							item.sizes.map(size => (
								<option key={size.value} value={size.value}>
									{size.value}
								</option>
							))
						) : (
							<option value=''>No sizes available</option>
						)}
					</select>
				</div>
				<div className={styles.formGroup}>
					<label>{t('quantity')}</label>
					<input
						type='number'
						value={quantity}
						min='1'
						onChange={e => setQuantity(parseInt(e.target.value))}
					/>
				</div>
				<div className={styles.formGroup}>
					<label>{t('delivery_method')}</label>
					<select
						value={deliveryMethod}
						onChange={e => setDeliveryMethod(e.target.value)}
					>
						<option value='delivery'>{t('delivery')}</option>
						<option value='pickup'>{t('pickup')}</option>
					</select>
				</div>
				<div className={styles.buttonGroup}>
					<button onClick={onClose} className={styles.cancelButton}>
						{t('cancel')}
					</button>
					<button onClick={handleSave} className={styles.saveButton}>
						{t('save')}
					</button>
				</div>
			</div>
		</div>
	)
}

export default EditCartItemModal
