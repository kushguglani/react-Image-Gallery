
import axios from 'axios'


export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID fb00f257d157d89c4858885882681974491606fa999fdbbf4e046f0eb6ae9b3a'
		// Authorization: Client - ID YOUR_ACCESS_KEY
	}
})
