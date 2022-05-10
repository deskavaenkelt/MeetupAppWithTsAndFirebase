import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FirebaseService from '../utils/api/service/FirebaseService'
import { MeetupItemProps } from '../utils/interfaces/MeetupsInterfaces'

const AllMeetupsView = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [receivedMeetups, setReceivedMeetups] = useState<Array<MeetupItemProps>>([])
	
	const fetchAllMeetups = () => {
		FirebaseService.getAllMeetups()
			.then(response => {
				const buildCorrectArray = []
				
				for (const key in response.data) {
					if (response.data.hasOwnProperty(key)) {
						const meetup: MeetupItemProps = {
							...response.data[key],
							id: key
						}
						buildCorrectArray.push(meetup)
					}
				}
				
				setReceivedMeetups(buildCorrectArray)
				setIsLoading(false)
			})
			.catch(error => {
				console.log(error)
			})
	}
	
	useEffect(() => {
		setIsLoading(true)
		fetchAllMeetups()
	}, [])
	
	if (isLoading) {
		return <h1>Loading...</h1>
	}
	
	return (
		<>
			<h1>All Meetups</h1>
			{ receivedMeetups.length === 0 ? <h1>No meetups yet</h1> : <MeetupList meetups={ receivedMeetups }/> }
		</>
	)
}

export default AllMeetupsView
