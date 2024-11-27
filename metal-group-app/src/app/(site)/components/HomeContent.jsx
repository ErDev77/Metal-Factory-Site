'use client'

import React, {useRef} from 'react'
import '@/styles/globals.module.css'
import MainSlider from '@/components/MainSlider'
import MainBoxes from '@/components/MainBoxes'
import MainProducts from '@/components/MainProducts'
import SponsorsSlider from '@/components/SponsorsSlider'
import TrustBox from '@/components/TrustBox'
import ServicesBox from '@/components/ServicesBox'
import { Element } from 'react-scroll'
import VideoBox from '@/components/VideoBox'
const HomeContent = () => {

	return (
		<div>
			<VideoBox />
			<MainBoxes />
			<Element name='services'>
				<ServicesBox />
			</Element>
			<MainProducts />
			<TrustBox />
			<SponsorsSlider />
		</div>
	)
}

export default HomeContent
