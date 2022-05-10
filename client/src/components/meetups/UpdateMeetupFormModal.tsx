import { FC, useState } from 'react'
import FirebaseService from '../../utils/api/service/FirebaseService'
import { CreateMeetupObject, MeetupItemProps } from '../../utils/interfaces/MeetupsInterfaces'
import Card from '../ui/card/Card'
import styles from '../ui/Modal.module.css'
import css from './NewMeetupForm.module.css'

interface OldMeetupData {
	oldMeetupData: MeetupItemProps
	onCancel: () => void
	onConfirm: () => void
}

const UpdateMeetupFormModal: FC<OldMeetupData> = ({oldMeetupData, onCancel, onConfirm}) => {
	const {id, title, image, address, description} = oldMeetupData
	const [titleField, setTitleField] = useState<string>(title)
	const [imageField, setImageField] = useState<string>(image)
	const [addressField, setAddressField] = useState<string>(address)
	const [descriptionField, setDescriptionField] = useState<string>(description)
	
	const submitHandler = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		
		const meetupData: CreateMeetupObject = {
			title: titleField,
			image: imageField,
			address: addressField,
			description: descriptionField
		}
		
		FirebaseService.updateMeetup(id, meetupData)
			.then(() => {
				onConfirm()
			})
			.catch(error => {
				console.log(error)
			})
	}
	
	return (
		<Card>
			<form className={ `${ css.form } ${ styles.modal }` } onSubmit={ submitHandler }>
				<h1>Edit Meetup</h1>
				<div className={ css.control }>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text'
						   required
						   id='title'
						   value={ titleField }
						   onChange={ (event) => setTitleField(event.target.value) }/>
				</div>
				<div className={ css.control }>
					<label htmlFor='image'>Meetup Image</label>
					<input type='url'
						   required
						   id='image'
						   value={ imageField }
						   onChange={ (event) => setImageField(event.target.value) }/>
				</div>
				<div className={ css.control }>
					<label htmlFor='address'>Address</label>
					<input type='text'
						   required
						   id='address'
						   onChange={ (event) => setAddressField(event.target.value) }
						   value={ addressField }/>
				</div>
				<div className={ css.control }>
					<label htmlFor='description'>Description</label>
					<textarea id='description'
							  required
							  rows={ 5 }
							  onChange={ (event) => setDescriptionField(event.target.value) }
							  value={ descriptionField }></textarea>
				</div>
				<div className={ css.actions }>
					<button className={ `${styles.btn} ${styles.btnAlt}` } onClick={ onCancel }>
						Cancel
					</button>
					<button className={css.btn} onClick={ submitHandler }>
						Confirm
					</button>
				</div>
			</form>
		</Card>
	)
}

export default UpdateMeetupFormModal
