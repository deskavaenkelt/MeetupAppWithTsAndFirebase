import { FC } from 'react'
import css from './Modal.module.css'

interface Props {
	onCancel: () => void
	onConfirm: () => void
}

const Modal: FC<Props> = ({onCancel, onConfirm}) => {
	return (
		<div className={css.modal}>
			<h2>Remove</h2>
			<p>Are you sure?</p>
			<button className={ `${css.btn} ${css.btnAlt}` } onClick={ onCancel }>
				Cancel
			</button>
			<button className={css.btn} onClick={ onConfirm }>
				Confirm
			</button>
		</div>
	)
}

export default Modal
