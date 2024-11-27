// components/LoadingPage.js
import React from 'react'
import { BeatLoader } from 'react-spinners'
import styles from '@/styles/LoadingPage.module.css'

const LoadingPage = () => {
	return (
		<div className={styles.loadingContainer}>
			<BeatLoader color='#007bff' size={15} />
		</div>
	)
}

export default LoadingPage
