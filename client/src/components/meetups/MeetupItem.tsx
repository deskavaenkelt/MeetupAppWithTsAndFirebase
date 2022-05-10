import { FC, useContext } from 'react'
import { MeetupItemProps } from '../../utils/interfaces/MeetupsInterfaces'
import FavoritesContext from '../../utils/provider/favoritesContext'
import Card from '../ui/card/Card'
import css from './MeetupItem.module.css'

interface Meetup {
	meetup: MeetupItemProps
}

const MeetupItem: FC<Meetup> = ({meetup}) => {
	const {id, title, image, address, description} = meetup
	const favoritesContext = useContext(FavoritesContext)
	const itemIsFavorite = favoritesContext?.itemIsFavorite(id)
	
	const toggleFavoriteStatusHandler = () => {
		itemIsFavorite ? favoritesContext?.removeFavorite(id) : favoritesContext?.addFavorite(meetup)
	}
	
	return (
		<li className={ css.item }>
			<Card>
				<div className={ css.image }>
					<img src={ image } alt={ title }/>
				</div>
				<div className={ css.content }>
					<h3>{ title }</h3>
					<address>{ address }</address>
					<p>{ description }</p>
				</div>
				<div className={ css.actions }>
					<button
						onClick={ toggleFavoriteStatusHandler }>
						{ itemIsFavorite ? 'Remove from favorites' : 'Add to Favorite' }
					</button>
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem
