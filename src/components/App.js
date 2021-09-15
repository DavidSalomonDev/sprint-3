import React, { useContext } from 'react'
import '../styles/App.css'
import Results from './Results'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import ThemeContext from '../hooks/ThemeContext'
import useInput from '../hooks/useInput'

const App = () => {
	const {isDark} = useContext(ThemeContext)
	const gifs = useInput([])
	const suggestions = useInput([1,2,4,6,6,3])

	return (
		<div className = {`App-container ${isDark ? 'dark' : ''}`}>
			<div className = {`App ${isDark ? 'dark' : ''}`}>
				<Navbar />
				<Searchbar 
					gifs={gifs.value} 
					setGifs={gifs.handleChange}
					suggestions={suggestions}/>
				<Results gifs={gifs.value}/>
			</div>
		</div>
	)
}

export default App
