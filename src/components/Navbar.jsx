import React, { useContext } from 'react'
import ThemeContext from '../hooks/ThemeContext'
import '../styles/Navbar.css'
import { refreshPage } from '../utils/refreshPage'

const Navbar = () => {
	const {isDark,setIsDark} = useContext(ThemeContext)

	return (
		<nav className='Navbar'>
			<img
				className='Navbar-logo'
				onClick={refreshPage}
				src={`${isDark ? '/images/logo-black.svg' : '/images/logo.svg'}`}
				alt='Gifos' />
			<button
				onClick={() => {setIsDark(!isDark)}}
				className={`colorBtn ${isDark ? 'dark' : ''}`}>
				{`${isDark ? 'Modo Light' : 'Modo Dark'}`}
			</button>
		</nav>
	)
}

export default Navbar
