import { FC, useContext, useState } from 'react'
import FirebaseService from '../../utils/api/service/FirebaseService'
import { MeetupItemProps } from '../../utils/interfaces/MeetupsInterfaces'
import FavoritesContext from '../../utils/provider/favoritesContext'
import Backdrop from '../ui/Backdrop'
import Card from '../ui/card/Card'
import Modal from '../ui/Modal'
import css from './MeetupItem.module.css'

interface Meetup {
	meetup: MeetupItemProps
	refreshList?: () => void
}

const MeetupItem: FC<Meetup> = ({meetup, refreshList}) => {
	const {id, title, image, address, description} = meetup
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const favoritesContext = useContext(FavoritesContext)
	const itemIsFavorite = favoritesContext?.itemIsFavorite(id)
	
	const toggleFavoriteStatusHandler = () => {
		itemIsFavorite ? favoritesContext?.removeFavorite(id) : favoritesContext?.addFavorite(meetup)
	}
	
	const toggleModalHandler = () => {
		setModalIsOpen(true)
	}
	
	const closeModalHandler = () => {
		setModalIsOpen(false)
	}
	
	const confirmModalHandler = () => {
		FirebaseService.deleteMeetup(id)
			.then(response => {
				console.log(response.data)
				closeModalHandler()
				if (refreshList) {
					refreshList()
				}
			})
			.catch(error => {
				console.log(error)
			})
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
					<button onClick={ toggleModalHandler }>Delete Meetup</button>
				</div>
				<div>
					{ modalIsOpen && <Modal onCancel={ closeModalHandler } onConfirm={ confirmModalHandler }/> }
					{ modalIsOpen && <Backdrop onCancel={ closeModalHandler }/> }
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem
