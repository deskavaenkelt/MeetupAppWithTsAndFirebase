import { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FavoritesContext from '../utils/provider/favoritesContext'

const FavoritesView = () => {
	const favoritesContext = useContext(FavoritesContext)
	
	let content
	
	if (favoritesContext?.totalFavorites === 0 || favoritesContext?.favorites === undefined) {
		content = <p>You don't have any favorites yet.</p>
	} else {
		content = <MeetupList meetups={ favoritesContext?.favorites }/>
	}
	
	return (
		<section>
			<h1>Favorites</h1>
			{ content }
		</section>
	)
}

export default FavoritesView
