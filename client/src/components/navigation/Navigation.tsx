import { Link } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import css from './Navigation.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../utils/provider/favoritesContext'

const Navigation = () => {
	const favoritesContext = useContext(FavoritesContext)
	
	return (
		<nav className={ css.header }>
			<div className={ css.logo }>React Meetups</div>
			<ul>
				<li><Link to={ RoutingPath.allMeetupsView }>All Meetups</Link></li>
				<li><Link to={ RoutingPath.newMeetupView }>Add New Meetup</Link></li>
				<li>
					<Link to={ RoutingPath.favoritesView }>
						Favorites <span className={ css.badge }>{ favoritesContext?.totalFavorites }</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
