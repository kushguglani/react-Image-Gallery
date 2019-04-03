
import axios from 'axios'


export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID '
		// Authorization: Client - ID YOUR_ACCESS_KEY
	}
})
