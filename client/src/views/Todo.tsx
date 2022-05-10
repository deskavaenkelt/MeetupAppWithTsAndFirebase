import React, { FC, useState } from 'react'
import Backdrop from '../components/Backdrop'
import Modal from '../components/Modal'

export interface Props {
	text: string,
}

const Todo: FC<Props> = ({text}) => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	
	const deleteHandler = () => {
		setModalIsOpen(true)
	}
	
	const closeModalHandler = () => {
		setModalIsOpen(false)
	}
	
	return (
		<div className='card'>
			<h2>{ text }</h2>
			<div className='actions'>
				<button className='btn' onClick={ deleteHandler }>Delete</button>
			</div>
			{ modalIsOpen ? <Modal onCancel={ closeModalHandler } onConfirm={ closeModalHandler }/> : null }
			{ modalIsOpen ? <Backdrop onCancel={ closeModalHandler }/> : null }
		
		</div>
	)
}

export default Todo
