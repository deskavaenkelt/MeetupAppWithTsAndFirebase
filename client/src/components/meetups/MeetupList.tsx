import { FC } from 'react'
import css from './MeetupList.module.css'
import MeetupItem, { MeetupItemProps } from './MeetupItem'

interface ArrayOfMeetups {
	meetups: Array<MeetupItemProps>
}

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
