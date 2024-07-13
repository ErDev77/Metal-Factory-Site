import React from 'react'
import '@/styles/globals.module.css'
import Header from '@/components/Header'
import HomeContent from './components/HomeContent'
import RootLayout from 'app/layout'
export default function HomePage({ Component, pageProps }) {
	return (
		<>
			<RootLayout>
				<Header />
				<HomeContent />
				<Component {...pageProps} />
			</RootLayout>
		</>
	)
}
