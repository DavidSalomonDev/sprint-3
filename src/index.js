import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {ThemeProvider} from './hooks/ThemeContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
		  <App />
 		</ThemeProvider>
	</React.StrictMode>,
  document.getElementById('root')
);
