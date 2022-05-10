import { FC } from 'react'
import { ArrayOfMeetups } from '../../utils/interfaces/MeetupsInterfaces'
import MeetupItem from './MeetupItem'
import css from './MeetupList.module.css'

const MeetupList: FC<ArrayOfMeetups> = ({meetups}) => {
	return (
		<ul className={ css.list }>
			{ meetups.map(meetup => (
				<MeetupItem key={ meetup.id } meetup={ meetup }/>
			)) }
		</ul>
	)
}

export default MeetupList
