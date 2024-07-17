'use client'

import React from 'react'
import '@/styles/globals.module.css'
import MainSlider from '@/components/MainSlider'
import MainBoxes from '@/components/MainBoxes'
import MainProducts from '@/components/MainProducts'
import SponsorsSlider from '@/components/SponsorsSlider'
import TrustBox from '@/components/TrustBox'
const HomeContent = () => {
	return (
		<div>
			<MainSlider />
			<MainBoxes />
			<MainProducts />
			<TrustBox />
			 <SponsorsSlider /> 
		</div>
	)
}

export default HomeContent
