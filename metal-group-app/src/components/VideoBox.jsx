import React, { useEffect, useState } from 'react'
import styles from '@/styles/VideoBox.module.css'
import { useTranslation } from 'react-i18next'
const VideoBox = () => {
	const [showText, setShowText] = useState(false)
	const { t, i18n } = useTranslation()
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowText(true)
		}, 500) 
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className={styles.videoContainer}>
			<video
				src='/mainvideo.mp4'
				alt='Main Video'
				autoPlay
				loop
				muted
				className={styles.video}
			/>
			{showText && (
				<div className={styles.textOverlay}>
					<h1 className={styles.title}>
						<span className={styles.whiteText}>Metal</span>{' '}
						<span className={styles.blueText}>Group</span>
					</h1>
					<p className={styles.description}>
						{t('video_text')}{' '}
					</p>
				</div>
			)}
		</div>
	)
}

export default VideoBox
