import Axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL

const FirebaseApi = Axios.create({
	baseURL: serverUrl
})

export default FirebaseApi
