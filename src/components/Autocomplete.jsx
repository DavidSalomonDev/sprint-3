import React, { useContext } from 'react'
import ThemeContext from '../hooks/ThemeContext'
import '../styles/Autocomplete.css'

const Autocomplete = ({suggestions}) => {
	const {isDark} = useContext(ThemeContext)

	const {value} = suggestions
	console.log(value)
	const suggestionsList = value.map(suggestion => {
		return <li ><img src="/images/icon-search.svg" alt="scope" /> {suggestion}</li>
	})

	return (
		<ul className={`Autocomplete ${isDark ? 'dark' : ''}`}>
			<ul>
				{suggestionsList}
			</ul>
		</ul>
	)
}

export default Autocomplete
