import React, { useContext } from 'react'
import ThemeContext from '../hooks/ThemeContext'
import '../styles/Results.css'

const Results = () => {
	const {isDark} = useContext(ThemeContext)
	return (
		<main className = 'Results-trends'>
			<h3 className = {`ResultsImages-title ${isDark ? 'dark' : ''}`}>Los trending gifs más divertidos de hoy!</h3>
			<article className = {`ResultsImages-list }`}>{' '}
			</article>
		</main>
	)
}

export default Results
