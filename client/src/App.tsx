import React from 'react'
import Navigation from './components/navigation/Navigation'
import Routing from './routes/Routing'
import { FavoritesContextProvider } from './utils/provider/favoritesContext'

function App() {
	return (
		<FavoritesContextProvider>
			<Routing>
				<Navigation/>
			</Routing>
		</FavoritesContextProvider>
	)
}

export default App
