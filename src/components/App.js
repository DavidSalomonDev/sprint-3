import React from 'react'
import '../styles/App.css'
import Results from './Results'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

const App = () => {
	return (
		<div className = {`App-container`}>
			<div className = {`App`}>
				<Navbar />
				<Searchbar />
				<Results />
			</div>
		</div>
	)
}

export default App
