'use client'

import React, { useState, useEffect } from 'react'
import styles from '@/styles/AboutUs.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoadingPage from '@/components/LoadingPage'
import { useTranslation } from 'react-i18next'
import MainSlider from '@/components/MainSlider'
const AboutUs = () => {
	const [activeTab, setActiveTab] = useState('history')
 	const [loading, setLoading] = useState(true)
	const { t, i18n } = useTranslation()

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
			<div className={styles.aboutUsContainerPhoto}>
				<img src='/nnn.jpg' alt='' />
				<h1 className={styles.overlayTitle}>About us</h1>
			</div>
			<div className={styles.aboutUsContainer}>
				<div className={styles.textOverlay}>
					<h1>
						<span>Welcome</span>
						<span>to</span>
						<span>Our Company</span>
					</h1>
					<p>
						<span>Providing top-notch</span>
						<span>metal products and</span>
						<span>solutions for construction</span>
					</p>
				</div>
				<div className={styles.aboutCompanyBox}>
					<img src='aboutcompany.jpg' alt='' />
					<h3>About Company</h3>
					<h1 className={styles.aboutCompanyTitle}>Metal Group</h1>
					<p className={styles.aboutCompanyText}>
						<p>{t('about_company_part1')}</p>
						<p>{t('about_company_part2')}</p>
						<p>{t('about_company_part3')}</p>
						<p>{t('about_company_part4')}</p>
					</p>
					<p className={styles.aboutCompanyText2}>
						<p>{t('about_company_part5')}</p>
						<p>{t('about_company_part6')}</p>
						<p>{t('about_company_part7')}</p>
						<p>{t('about_company_part8')}</p>
					</p>
				</div>
				<div className={styles.sertificatesBox}>
					<h1 className={styles.sertificatesBoxTitle}>{t('certificates')}</h1>
					<div className={styles.imagesContainer}>
						<img src='/sertificat1.png' alt='Certificate 1' />
						<img src='/sertificat2.png' alt='Certificate 2' />
						{/* <embed 
							src='/metalgroup.pdf'
							width='600'
							height='800'
							className={styles.pdfBox}
							type='application/pdf'
						/> */}
					</div>
				</div>
				{/* <div className={styles.tabSection}>
					<div className={styles.tabContainer}>
						<div
							className={`${styles.tabButton} ${
								activeTab === 'history' ? styles.active : ''
							}`}
							onClick={() => setActiveTab('history')}
						>
							{t('about_company')}
						</div>
						<div className={styles.horizontalLine}></div>
						<div
							className={`${styles.tabButton} ${
								activeTab === 'team' ? styles.active : ''
							}`}
							onClick={() => setActiveTab('team')}
						>
							{t('certificates')}
						</div>
					</div>
					<div className={styles.tabContent}>
						{activeTab === 'history' && (
							<div className={styles.tabPanel}>
								<p>{t('about_company_part1')}</p>
								<p>{t('about_company_part2')}</p>
								<p>{t('about_company_part3')}</p>
								<p>{t('about_company_part4')}</p>
								<p>{t('about_company_part5')}</p>
								<p>{t('about_company_part6')}</p>
								<p>{t('about_company_part7')}</p>
								<p>{t('about_company_part8')}</p>
							</div>
						)}
						{activeTab === 'team' && (
							<div className={styles.tabPanel}>
								<div className={styles.imagesContainer}>
									<img src='/sertificat1.png' alt='Certificate 1' />
									<img src='/sertificat2.png' alt='Certificate 2' />
								</div>
							</div>
						)}
					</div>
				</div> */}
			</div>
			<Footer />
		</div>
	)
}

export default AboutUs
