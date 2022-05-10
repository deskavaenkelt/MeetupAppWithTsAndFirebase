
import { ReactNode } from 'react'
import css from './Card.module.css'

const Card = (props: { children?: ReactNode }) => {
	
	return (
		<div className={css.card}>
			{ props.children }
		</div>
	)
}

export default Card
