import { FC } from 'react'
import css from './MeetupItem.module.css'

export interface MeetupItemProps {
	id: string,
	title: string,
	image: string,
	address: string,
	description: string,
}

interface Meetup {
	meetup: MeetupItemProps
}

const MeetupItem: FC<Meetup> = ({meetup}) => {
	const {title, image,  address, description} = meetup
	
	return (
		<li className={css.item}>
			<div className={css.image}>
				<img src={image} alt={title}/>
			</div>
			<div className={css.content}>
				<h3>{ title }</h3>
				<address>{ address }</address>
				<p>{ description }</p>
			</div>
			<div className={css.actions}>
				<button>To Favorites</button>
			</div>
		</li>
	)
}

export default MeetupItem
