import http from '../FirebaseApi'
import { CreateMeetupObject } from '../../interfaces/MeetupsInterfaces'

const meetupsUrl = '/meetups.json'

const FirebaseService = {
	createMeetup: (newMeetupPayload: CreateMeetupObject) => {
		return http.post(meetupsUrl, newMeetupPayload)
	},
	
	getAllMeetups: () => {
		return http.get<CreateMeetupObject[]>(meetupsUrl)
	}
}

export default FirebaseService
