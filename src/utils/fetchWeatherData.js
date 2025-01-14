import axios from 'axios'

export const fetchWeatherData = async (latitude, longitude) => {
	const apiToken = '63e37f5b1cb82b668b24de45813726a8'
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiToken}&lang=ru&units=metric`

	console.log('Запрос к OpenWeatherMap:', url)
	try {
		const response = await axios.get(url)

		return response.data
	} catch (error) {
		alert('Ошибка, нельзя получить данные о погоде.')
		console.error(error)
		return null
	}
}
