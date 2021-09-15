import React, { useContext } from 'react'
import ThemeContext from '../hooks/ThemeContext'
import { useFetch } from '../hooks/useFetch'
import { autocomplete } from '../api/endpoints'
import '../styles/Autocomplete.css'

const Autocomplete = ({gifs}) => {
	const {isDark} = useContext(ThemeContext)


	const autocompleteUrl = `${autocomplete}${gifs}`
	const suggestionsResponse = useFetch(autocompleteUrl, {isLoading: true, data: null})
	if(!suggestionsResponse.data || suggestionsResponse.isLoading){ return 'Cargando...'}
	const suggestionsArray = suggestionsResponse.data

	const suggestionsList = suggestionsArray.map(suggestion => {
		return <li ><img src="/images/icon-search.svg" alt="scope" /> {suggestion.name}</li>
	})

	return (
		<div className={`Autocomplete ${isDark ? 'dark' : ''} ${suggestionsList.length > 0 ? '' : 'hide'}`}>
			<ul>
				{suggestionsList}
			</ul>
		</div>
	)
}

export default Autocomplete
