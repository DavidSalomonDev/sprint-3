import React, { useContext } from 'react'
import ThemeContext from '../hooks/ThemeContext'
import '../styles/Results.css'
import Trends from './Trends'

const Results = () => {
	const {isDark} = useContext(ThemeContext)

	return (
		<main className = 'Results'>
			<>
				<h3 className = {`Results-title ${isDark ? 'dark' : ''}`}>Los trending gifs más divertidos de hoy!</h3>
				<Trends />
			</>
		</main>
	)
}

export default Results
