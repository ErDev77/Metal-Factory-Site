'use client'

import Header from '@/components/Header'
import MainProducts from '@/components/MainProducts'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import ScrollToTop from 'react-scroll-to-top'
import { FiChevronUp } from 'react-icons/fi'
import React, { useState, useEffect } from 'react'
import LoadingPage from '@/components/LoadingPage'
const ProductsPage = () => {
	const [loading, setLoading] = useState(true)

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
			<Products />
			<Footer />
			<ScrollToTop smooth component={<FiChevronUp size={25} color='blue' />} />
		</div>
	)
}

export default ProductsPage
