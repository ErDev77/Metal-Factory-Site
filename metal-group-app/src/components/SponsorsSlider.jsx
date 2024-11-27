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
	{
		image: '/sponsor1.png',
		link: 'https://corporate.arcelormittal.com/',
	},
	{
		image: '/sponsor2.png',
		link: 'https://metinvestholding.com/',
	},
	{
		image: '/sponsor3.png',
		link: 'https://www.bakusteel.com/en/home/',
	},
	{
		image: '/sponsor4.png',
		link: 'https://www.yucelboru.com.tr/index.php',
	},
	{
		image: '/sponsor5.png',
		link: 'https://www.metallotorg.ru/',
	},
	{
		image: '/sponsor6.png',
		link: 'https://www.rustavisteel.ge/',
	},
	{
		image: '/sponsor7.png',
		link: 'https://www.tosyaliholding.com.tr/',
	},
]


	return (
		<div className={styles.sponsorsSliderContainer}>
			<Slider {...settings}>
				{sponsors.map((sponsor, index) => (
					<div key={index} className={styles.slickSlide}>
						<a href={sponsor.link} target='_blank' rel='noopener noreferrer'>
							<img src={sponsor.image} alt={`Sponsor ${index + 1}`} />
						</a>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default SponsorsSlider
