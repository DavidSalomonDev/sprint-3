import React from 'react'
import './App.css'
import GifsList from './components/Results/GifsList/GifsList'
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'

const App = () => {
	return (
		<div className = {`App-container`}>
			<div className = {`App`}>
				<Navbar />
				<Searchbar />
				<GifsList />
			</div>
		</div>
	)
}

export default App
