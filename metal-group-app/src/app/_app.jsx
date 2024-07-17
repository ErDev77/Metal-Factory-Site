
import React from 'react'
import RootLayout from '@/app/layout'
import { LanguageProvider } from '../context/LanguageContext'

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<LanguageProvider>
				<RootLayout>
					<Component {...pageProps} />
				</RootLayout>
			</LanguageProvider>
		</React.StrictMode>
	)
}

export default MyApp;

