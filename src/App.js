import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Blog from './pages/Blog/Blog'
import OurStory from './pages/OurStory/OurStory'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className='wrapper'>
			<Header />

			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='shop' element={<Shop />} />
					<Route path='blog' element={<Blog />} />
					<Route path='our-story' element={<OurStory />} />
				</Routes>
			</main>

			<Footer />
		</div>
	)
}

export default App
