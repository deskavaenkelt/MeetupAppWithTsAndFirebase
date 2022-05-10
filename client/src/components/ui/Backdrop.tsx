import { FC } from 'react'
import css from './Backdrop.module.css'

interface Props {
	onCancel: () => void
}

const Backdrop: FC<Props> = ({onCancel}) => {
	
	return (<div className={css.backdrop} onClick={ onCancel }/>)
}

export default Backdrop
