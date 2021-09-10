import React from 'react'
import './Navbar.css'

const Navbar = () => {
	const refreshPage = () =>{
		window.location.reload(true)
	}

	return (
		<nav className='Navbar'>
			<img
				className='Navbar-logo'
				onClick={refreshPage}
				src={'/images/logo.svg'}
				alt='Gifos' />;
			<button
				className={`colorBtn`}>
				'Modo Light'
			</button>
		</nav>
	)
}

export default Navbar
