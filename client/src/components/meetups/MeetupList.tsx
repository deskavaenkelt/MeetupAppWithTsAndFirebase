import { FC } from 'react'
import { ArrayOfMeetups } from '../../utils/interfaces/MeetupsInterfaces'
import css from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

const MeetupList: FC<ArrayOfMeetups> = ({meetups}) => {
	return (
		<ul className={ css.list }>
			{meetups.map(meetup => (
				<MeetupItem key={meetup.id} meetup={meetup} />
			))}
		</ul>
	)
}

export default MeetupList
