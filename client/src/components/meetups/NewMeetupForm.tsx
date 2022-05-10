import { FC, useRef } from 'react'
import { CreateMeetupObject } from '../../utils/interfaces/MeetupsInterfaces'
import Card from '../ui/card/Card'
import css from './NewMeetupForm.module.css'

interface OnAddMeetup {
	onAddMeetup: (meetup: CreateMeetupObject) => void
}

const NewMeetupForm: FC<OnAddMeetup> = ({onAddMeetup}) => {
	const titleInputRef = useRef<HTMLInputElement>(null)
	const imageInputRef = useRef<HTMLInputElement>(null)
	const addressInputRef = useRef<HTMLInputElement>(null)
	const descriptionInputRef = useRef<HTMLTextAreaElement>(null)
	
	const submitHandler = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		
		const enteredTitle = titleInputRef.current?.value
		const enteredImage = imageInputRef.current?.value
		const enteredAddress = addressInputRef.current?.value
		const enteredDescription = descriptionInputRef.current?.value
		
		const meetupData: CreateMeetupObject = {
			title: String(enteredTitle),
			image: String(enteredImage),
			address: String(enteredAddress),
			description: String(enteredDescription)
		}
		
		onAddMeetup(meetupData)
	}
	
	return (
		<Card>
			<form className={ css.form } onSubmit={ submitHandler }>
				<div className={ css.control }>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' required id='title' ref={ titleInputRef }/>
				</div>
				<div className={ css.control }>
					<label htmlFor='image'>Meetup Image</label>
					<input type='url' required id='image' ref={ imageInputRef }/>
				</div>
				<div className={ css.control }>
					<label htmlFor='address'>Address</label>
					<input type='text' required id='address' ref={ addressInputRef }/>
				</div>
				<div className={ css.control }>
					<label htmlFor='description'>Description</label>
					<textarea id='description' required rows={ 5 } ref={ descriptionInputRef }></textarea>
				</div>
				<div className={ css.actions }>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	)
}

export default NewMeetupForm
