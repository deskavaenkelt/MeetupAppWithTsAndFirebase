import { FC } from 'react'
import { MeetupItemProps } from '../../utils/interfaces/MeetupsInterfaces'
import MeetupItem from './MeetupItem'
import css from './MeetupList.module.css'

interface Props {
	meetups: Array<MeetupItemProps>
	refreshList?: () => void
}

const MeetupList: FC<Props> = ({meetups, refreshList}) => {
	return (
		<ul className={ css.list }>
			{ meetups.map(meetup => (
				<MeetupItem key={ meetup.id } meetup={ meetup } refreshList={ refreshList }/>
			)) }
		</ul>
	)
}

export default MeetupList
