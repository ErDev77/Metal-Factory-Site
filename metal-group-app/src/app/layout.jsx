"use client"

import styles from '@/styles/globals.module.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Metadata from './metadata'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<Metadata />
			</head>
			<body className={styles.body}>
				<Provider store={store}>{children}</Provider>
			</body>
		</html>
	)
}
