import React, { useContext } from 'react'
import ThemeContext from '../hooks/ThemeContext'
import { useFetch } from '../hooks/useFetch'
import { trends } from '../api/endpoints'

const Trends = () => {
	const {isDark} = useContext(ThemeContext)
	const trendsResponse = useFetch(trends, {isLoading: true, data: null})
	if(!trendsResponse.data || trendsResponse.isLoading){ return 'Cargando...'}
	
	const trendsArray = trendsResponse.data
	
	const trendsList = trendsArray.map(gif => {
		return (
			<a 
				key={gif.id}	
				href={gif.url} 
				target="_blank" 
				rel='noreferrer'> 
					<img 
						className='Results-img'
						src={gif.images.downsized.url} 
						alt={gif.title}			
						loading='eager'
					/>
			</a>
		)
	})
	return (
		<article className = {`Results-list ${isDark ? 'dark' : ''}`}>
			{trendsList}
		</article>
	)
}

export default Trends
