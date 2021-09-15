import React, { useContext } from 'react'
import ThemeContext from '../hooks/ThemeContext'
import Autocomplete from './Autocomplete'
import '../styles/Searchbar.css'

const Searchbar = ({
	gifs,
	setGifs, 
	suggestions
}) => {
	const {isDark} = useContext(ThemeContext)
	return (
		<div className = 'Searchbar'>
			<h2 className = {`Searchbar-title`}>¡Inspirate y busca los mejores <span>gifs!</span></h2>
			<img src = '/images/ilustra_header.svg' alt = 'Search header'></img>
			<form className = 'Searchbar-inputContainer'>
				<input
					className = {`Searchbar-input ${isDark ? 'dark' : ''}`}
					type = 'text'
					onChange= {setGifs}
					value={gifs}
					placeholder = 'Busca gifs'
				></input>
				<button
					type = 'submit'
					className = {`Searchbar-btn `}
				>
					<img src = '/images/icon-search-dark.svg' alt = 'submit' />
				</button>
				
			</form>
			{suggestions.value.length > 0 && 
				<Autocomplete gifs = {gifs}  />}
		</div>
	)
}

export default Searchbar
