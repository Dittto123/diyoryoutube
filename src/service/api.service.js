import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const RAPID_API_KEY = process.env.REACT_APP_PUBLIC_KEY

const options = {
	params: {
		maxResults: '100',
	},
	headers: {
        'X-RapidAPI-Key': "05fba66e07msh699369846684f0cp179df8jsn1f4ed36e6e0e",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	},
}

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)
		return response.data
	},
}