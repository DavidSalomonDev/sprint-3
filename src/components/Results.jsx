import React, { useContext } from 'react'
import ThemeContext from '../hooks/ThemeContext'
import '../styles/Results.css'
import Autocomplete from './Autocomplete'
import Trends from './Trends'

const Results = ({suggestions, gifs}) => {
	const {isDark} = useContext(ThemeContext)

	return (
		<main className = 'Results'>
			{suggestions.value.length > 0 && 
				<Autocomplete gifs = {gifs}  />}
			<>
				<h3 className = {`Results-title ${isDark ? 'dark' : ''}`}>Los trending gifs más divertidos de hoy!</h3>
				<Trends />
			</>
		</main>
	)
}

export default Results
