import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Blog from './pages/Blog/Blog'
import OurStory from './pages/OurStory/OurStory'
import Footer from './components/Footer/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Contacts from './pages/Contact/Contacts'
import NotFound from './pages/NotFound/NotFound'

function App() {
	return (
		<div className='wrapper'>
			<header className='header'>
				<Header />
			</header>

			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='shop' element={<Shop />} />
					<Route path='blog' element={<Blog />} />
					<Route path='our-story' element={<OurStory />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='privacy-policy' element={<PrivacyPolicy />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>

			<footer className='footer'>
				<Footer />
			</footer>
		</div>
	)
}

export default App
