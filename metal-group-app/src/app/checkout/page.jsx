'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/CheckoutPage.module.css'
import { useTranslation } from 'react-i18next'
import { useForm as useFormSpree, ValidationError } from '@formspree/react'
import { useForm as useFormHook } from 'react-hook-form'
import { Snackbar, Alert } from '@mui/material'
import LoadingPage from '@/components/LoadingPage'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'



const CheckoutPage = () => {
	const { t } = useTranslation()
	const cart = useSelector(state => state.cart.items)
	const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
	const [openSnackbar, setOpenSnackbar] = useState(false)
	const [snackbarMessage, setSnackbarMessage] = useState('')
	const [loading, setLoading] = useState(true)


	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
	} = useFormHook({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			company: '',
			city: '',
		},
		mode: 'onChange',
	})

	const formCartDetails = cart => {
		return cart
			.map(item => {
				const size = item.selectedSize ? item.selectedSize : 'Not specified'
				const deliveryMethod = item.deliveryMethod
					? item.deliveryMethod
					: 'Not specified'

				return `Title: ${t(
					item.title
				)}\nSize: ${size}\nDelivery Method: ${deliveryMethod}\nQuantity: ${
					item.quantity
				}\n`
			})
			.join('\n')
	}


		const getDeliveryMethod = method => {
			return t(method)
		}



	const [state, handleSubmitSpree] = useFormSpree('xvgpzqkq')

	const formRef = useRef(null)

const onSubmit = async data => {
	console.log('Submitting data:', data)

	const cartDetails = formCartDetails(cart)

	const payload = {
		...data,
		cart: cartDetails,
	}

	const formData = new FormData()
	Object.keys(payload).forEach(key => formData.append(key, payload[key]))

	try {
		const result = await handleSubmitSpree(formData)
		console.log('Form submission result:', result) 
		if (result.succeeded) {
			console.log('Form successfully submitted')
		} else {
			console.error('Form submission failed:', result.errors)
		}
	} catch (error) {
		console.error('Submission error:', error)
	}
}

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false)
	}

	const handleButtonClick = async () => {
		console.log('Button clicked, checking form validation...')
		const isFormValid = await trigger()
		console.log('Form valid:', isFormValid)

		if (isFormValid) {
			console.log('Form is valid, submitting...')
			handleSubmit(onSubmit)()
		} else {
			console.log('Form is invalid, displaying errors...')
			Object.keys(errors).forEach(key => {
				console.log(`Field ${key} is invalid:`, errors[key])
			})
		}
	}

			useEffect(() => {
				const timer = setTimeout(() => {
					setLoading(false)
				}, 1000)

				return () => clearTimeout(timer)
			}, [])

			if (loading) {
				return <LoadingPage />
			}

	return (
		<div>
			<Header />
			<div className={styles.pageContainer}>
				<h1>{t('checkout')}</h1>

				<div className={styles.checkoutContainer}>
					<div className={styles.deliveryInfo}>
						<h2>{t('checkout_information')}</h2>
						<form
							ref={formRef}
							onSubmit={handleSubmit(onSubmit)}
							className={styles.formBox}
						>
							<div className={styles.formGroup}>
								<label htmlFor='firstName'>{t('first_name')}</label>
								<input
									name='firstName'
									type='text'
									id='firstName'
									className={errors.firstName ? styles.error : ''}
									{...register('firstName', {
										required: t('Name required'),
										pattern: {
											value: /^[A-Za-zА-Яа-яЁё]+$/,
											message: t('Only letters are allowed'),
										},
									})}
								/>
								{errors.firstName && (
									<p className={styles.error}>{errors.firstName.message}</p>
								)}
							</div>
							<div className={styles.formGroup}>
								<label htmlFor='lastName'>{t('last_name')}</label>
								<input
									name='lastName'
									type='text'
									id='lastName'
									className={errors.lastName ? styles.error : ''}
									{...register('lastName', {
										required: t('Surname required'),
										pattern: {
											value: /^[A-Za-zА-Яа-яЁё]+$/,
											message: t('Only letters are allowed'),
										},
									})}
								/>
								{errors.lastName && (
									<p className={styles.error}>{errors.lastName.message}</p>
								)}
							</div>
							<div className={styles.formGroup}>
								<label htmlFor='email'>{t('email')}</label>
								<input
									name='email'
									type='email'
									id='email'
									className={errors.email ? styles.error : ''}
									{...register('email', {
										required: t('Email required'),
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: t('invalid_email'),
										},
									})}
								/>
								{errors.email && (
									<p className={styles.error}>{errors.email.message}</p>
								)}
								<ValidationError
									prefix='Email'
									field='email'
									errors={state.errors}
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor='phone'>{t('phone')}</label>
								<PhoneInput
									name='phone'
									id='phone'
									international
									defaultCountry='GE'
									className={errors.phone ? styles.error : ''}
									{...register('phone', {
										required: t('Phone number required'),
										pattern: {
											value: /^[+][0-9]{1,4}[ ][0-9]{6,14}$/,
											message: t('invalid_phone'),
										},
									})}
								/>
								{errors.phone && (
									<p className={styles.error}>{errors.phone.message}</p>
								)}
							</div>
							<div className={styles.formGroup}>
								<label htmlFor='company'>{t('company')}</label>
								<input
									name='company'
									type='text'
									id='company'
									className={errors.company ? styles.error : ''}
									{...register('company')}
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor='city'>{t('city')}</label>
								<input
									name='city'
									type='text'
									id='city'
									className={errors.city ? styles.error : ''}
									{...register('city')}
								/>
								{errors.city && (
									<p className={styles.error}>{errors.city.message}</p>
								)}
							</div>
						</form>
					</div>
					<div className={styles.orderSummary}>
						<h2>{t('order_summary')}</h2>
						<div className={styles.orderItems}>
							{cart.map((item, index) => (
								<div
									key={`${item.id}-${item.selectedSize}-${item.deliveryMethod}`}
									className={styles.cartItem}
								>
									<img src={item.image} alt={item.title} />
									<div className={styles.cartItemDetails}>
										<h3>{t(item.title)}</h3>
										<p>
											{t('size')} {item.selectedSize} {''}
											{t(
												item.sizes.find(
													size => size.value === item.selectedSize
												).unit
											)}
										</p>
										<p>
											{t('delivery_method')}{' '}
											{getDeliveryMethod(item.deliveryMethod)}
										</p>
										<p>
											{t('quantity')} {item.quantity}
										</p>
									</div>
								</div>
							))}
						</div>
						<div className={styles.orderSummaryFooter}>
							<p>
								{t('total')} {itemCount} {t('items')}
							</p>
							<button
								type='button'
								className={styles.submitButton}
								disabled={!isValid || state.submitting}
								onClick={handleButtonClick}
							>
								{t('confirm_order')}
							</button>
							{state.succeeded}
						</div>
					</div>
				</div>
			</div>
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

export default CheckoutPage
