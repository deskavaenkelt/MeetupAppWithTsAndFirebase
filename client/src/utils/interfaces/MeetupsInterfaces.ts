export interface CreateMeetupObject {
	title: string,
	image: string,
	address: string,
	description: string,
}

export interface MeetupItemProps {
	id: string,
	title: string,
	image: string,
	address: string,
	description: string,
}

export interface ArrayOfMeetups {
	meetups: Array<MeetupItemProps>
}
