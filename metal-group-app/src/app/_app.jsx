import React from 'react'
import RootLayout from '@/app/layout'
import '../components/i18n'
import { LoadingProvider } from './LoadingContext'
import LoadingPage from '@/components/LoadingPage'
function MyApp({ Component, pageProps }) {
	return (
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
	)
}

export default MyApp
