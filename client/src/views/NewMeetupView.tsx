import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import RoutingPath from '../routes/RoutingPath'
import FirebaseService from '../utils/api/service/FirebaseService'
import { CreateMeetupObject } from '../utils/interfaces/MeetupsInterfaces'


const NewMeetupView = () => {
	const navigate = useNavigate()
	
	const addMeetupHandler = (meetupData: CreateMeetupObject) => {
		FirebaseService.createMeetup(meetupData)
			.then(() => {
				navigate(RoutingPath.allMeetupsView)
			})
			.catch((error) => {
				console.log(error)
			})
	}
	
	return (
		<>
			<h1>NewMeetup</h1>
			<NewMeetupForm onAddMeetup={ addMeetupHandler }/>
		</>
	)
}

export default NewMeetupView
