import { CreateMeetupObject, MeetupItemProps } from '../../interfaces/MeetupsInterfaces'
import http from '../FirebaseApi'

const meetupsUrl = '/meetups.json'

const FirebaseService = {
	createMeetup: (newMeetupPayload: CreateMeetupObject) => {
		return http.post(meetupsUrl, newMeetupPayload)
	},
	
	getAllMeetups: () => {
		return http.get<Array<MeetupItemProps>>(meetupsUrl)
	},
	
	deleteMeetup: (id: string) => {
		return http.delete(`/meetups/${ id }.json`)
	}
}

export default FirebaseService
