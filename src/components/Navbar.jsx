import React from 'react'
import '../styles/Navbar.css'
import { refreshPage } from '../utils/refreshPage'

const Navbar = () => {
	return (
		<nav className='Navbar'>
			<img
				className='Navbar-logo'
				onClick={refreshPage}
				src={'/images/logo.svg'}
				alt='Gifos' />;
			<button
				className={`colorBtn`}>
				Modo Light
			</button>
		</nav>
	)
}

export default Navbar
