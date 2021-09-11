import React, { useContext } from 'react'
import '../styles/App.css'
import Results from './Results'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import ThemeContext from '../hooks/ThemeContext'

const App = () => {
	const {isDark} = useContext(ThemeContext)
	return (
		<div className = {`App-container ${isDark ? 'dark' : ''}`}>
			<div className = {`App ${isDark ? 'dark' : ''}`}>
				<Navbar />
				<Searchbar />
				<Results />
			</div>
		</div>
	)
}

export default App
