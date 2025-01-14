import { useEffect, useRef, useState } from 'react'
import { fetchWeatherData } from '../fetchWeatherData.js'

export const useWeatherData = () => {
	const [weatherData, setWeatherData] = useState(null)
	const fetchedRef = useRef(false)

	useEffect(() => {
		const getWeather = async () => {
			if (fetchedRef.current) return // Предотвращаем повторный запрос
			fetchedRef.current = true

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					async position => {
						const { latitude, longitude } = position.coords
						console.log('lat, lon', latitude, longitude)

						const data = await fetchWeatherData(latitude, longitude)
						setWeatherData(data)
					},
					error => {
						console.error('Ошибка:', error)
					}
				)
			} else {
				console.error('Геолокация не поддерживается вашим браузером.')
			}
		}

		getWeather()

		// Очистка эффекта
		return () => {
			fetchedRef.current = false
		}
	}, [])

	return weatherData
}
