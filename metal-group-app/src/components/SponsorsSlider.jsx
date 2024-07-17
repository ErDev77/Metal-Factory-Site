import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'
import styles from '@/styles/SponsorsSlider.module.css'

const SponsorsSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 4000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 0, 
		cssEase: 'linear', 
	}

	const sponsors = [
		'/sponsor1.png',
		'/sponsor2.png',
		'/sponsor3.png',
		'/sponsor4.png',
		'/sponsor5.png',
		'/sponsor6.png',
		'/sponsor7.png',
	]

	return (
		<div className={styles.sponsorsSliderContainer}>
			<Slider {...settings}>
				{sponsors.map((src, index) => (
					<div key={index} className={styles.slickSlide}>
						<img src={src} alt={`Sponsor ${index + 1}`} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default SponsorsSlider
