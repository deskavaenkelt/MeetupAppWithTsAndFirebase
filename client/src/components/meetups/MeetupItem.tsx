import { FC } from 'react'
import { MeetupItemProps } from '../../utils/interfaces/MeetupsInterfaces'
import Card from '../ui/card/Card'
import css from './MeetupItem.module.css'

interface Meetup {
	meetup: MeetupItemProps
}

const MeetupItem: FC<Meetup> = ({meetup}) => {
	const {title, image,  address, description} = meetup
	
	return (
		<li className={css.item}>
			<Card>
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
			</Card>
		</li>
	)
}

export default MeetupItem
