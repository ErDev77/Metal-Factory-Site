import styles from '@/styles/TrustBox.module.css'

const TrustBox = () => {
	return (
		<div className={styles.trustBoxContainer}>
			<div className={styles.overlay}></div>
			<div className={styles.trustText}>
				<h2>Thousands of consumers trust us...</h2>
				<ul>
					<li>We've expert and certified staff</li>
					<li>We only provide quality services</li>
					<li>We offer you free estimates</li>
				</ul>
			</div>
		</div>
	)
}

export default TrustBox
