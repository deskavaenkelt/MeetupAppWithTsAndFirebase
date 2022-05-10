import { FC, useContext, useState } from 'react'
import FirebaseService from '../../utils/api/service/FirebaseService'
import { MeetupItemProps } from '../../utils/interfaces/MeetupsInterfaces'
import FavoritesContext from '../../utils/provider/favoritesContext'
import Backdrop from '../ui/Backdrop'
import Card from '../ui/card/Card'
import Modal from '../ui/Modal'
import css from './MeetupItem.module.css'
import UpdateMeetupFormModal from './UpdateMeetupFormModal'

interface Meetup {
	meetup: MeetupItemProps
	refreshList?: () => void
}

const MeetupItem: FC<Meetup> = ({meetup, refreshList}) => {
	const {id, title, image, address, description} = meetup
	const [modalIsOpenUpdate, setModalIsOpenUpdate] = useState<boolean>(false)
	const [modalIsOpenDelete, setModalIsOpenDelete] = useState<boolean>(false)
	const favoritesContext = useContext(FavoritesContext)
	const itemIsFavorite = favoritesContext?.itemIsFavorite(id)
	
	const toggleFavoriteStatusHandler = () => {
		itemIsFavorite ? favoritesContext?.removeFavorite(id) : favoritesContext?.addFavorite(meetup)
	}
	
	const toggleModalHandlerUpdate = () => {
		setModalIsOpenUpdate(true)
	}
	
	const toggleModalHandlerDelete = () => {
		setModalIsOpenDelete(true)
	}
	
	const closeModalHandlerUpdate = () => {
		setModalIsOpenUpdate(false)
	}
	
	const closeModalHandlerDelete = () => {
		setModalIsOpenDelete(false)
	}
	
	const confirmModalHandlerUpdate = () => {
		closeModalHandlerUpdate()
		if (refreshList) {
			refreshList()
		}
	}
	
	const confirmModalHandlerDelete = () => {
		FirebaseService.deleteMeetup(id)
			.then(() => {
				closeModalHandlerDelete()
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
					<button onClick={ toggleModalHandlerUpdate }>Update Meetup</button>
					<button onClick={ toggleModalHandlerDelete }>Delete Meetup</button>
				</div>
				<div>
					{ modalIsOpenUpdate && <UpdateMeetupFormModal onCancel={ closeModalHandlerUpdate }
                                                                  onConfirm={ confirmModalHandlerUpdate }
                                                                  oldMeetupData={ meetup }/> }
					{ modalIsOpenUpdate && <Backdrop onCancel={ closeModalHandlerUpdate }/> }
				</div>
				<div>
					{ modalIsOpenDelete && <Modal onCancel={ closeModalHandlerDelete }
                                                  onConfirm={ confirmModalHandlerDelete }/> }
					{ modalIsOpenDelete && <Backdrop onCancel={ closeModalHandlerDelete }/> }
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem
