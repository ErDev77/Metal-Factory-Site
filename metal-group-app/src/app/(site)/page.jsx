"use client"

import React from 'react'
import '@/styles/globals.module.css'
import Header from '@/components/Header'
import HomeContent from './components/HomeContent'
import TopBar from '@/components/TopBar'
import ScrollToTop from 'react-scroll-to-top'
import { FiChevronUp } from 'react-icons/fi'
import Footer from '@/components/Footer'
function HomePage({ Component, pageProps }) {
	
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
