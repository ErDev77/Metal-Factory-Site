import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import styles from '@/styles/MainSlider.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const MainSlider = () => {
	const sliderRef = useRef(null)

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0px',
		afterChange: current => handleSlideChange(current),
	}

	const handleSlideChange = current => {
		const slides = document.querySelectorAll(`.${styles.slickSlide} img`)
		slides.forEach((slide, index) => {
			if (index === current) {
				slide.style.transform = 'scale(1.05)'
			} else {
				slide.style.transform = 'scale(1)'
			}
		})
	}

	useEffect(() => {
		handleSlideChange(0)
	}, [])

	const goToPrevSlide = () => {
		sliderRef.current.slickPrev()
	}

	const goToNextSlide = () => {
		sliderRef.current.slickNext()
	}

	return (
		<div className={styles.sliderContainer}>
			<Slider ref={sliderRef} {...settings}>
				<div className={styles.slickSlide}>
					<img src='/slide.jpg' alt='Slide 1' />
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
				</div>
				<div className={styles.slickSlide}>
					<img src='/nnn.jpg' alt='Slide 2' />
					{/* <div className={styles.textOverlay}>
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
					</div> */}
				</div>
			</Slider>
			<div className={styles.sliderControls}>
				<button onClick={goToPrevSlide}>
					<FiChevronLeft size={30} />
				</button>
				<button onClick={goToNextSlide}>
					<FiChevronRight size={30} />
				</button>
			</div>
		</div>
	)
}

export default MainSlider
