"use client"
import React, { useState, useEffect } from 'react'
import '@/styles/globals.module.css'
import Header from '@/components/Header'
import HomeContent from './components/HomeContent'
import TopBar from '@/components/TopBar'
import ScrollToTop from 'react-scroll-to-top'
import { FiChevronUp } from 'react-icons/fi'
import Footer from '@/components/Footer'
import LoadingPage from '@/components/LoadingPage'

export function HomePage({ Component, pageProps }) {
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
			<TopBar />
			<Header />
			<HomeContent />
			<Footer />
			<ScrollToTop smooth component={<FiChevronUp size={25} color='blue' />} />
		</div>
	)
}

export default HomePage;
