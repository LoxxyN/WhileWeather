import { CircleGauge, Droplet, Wind } from 'lucide-react'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { fetchWeatherData } from './api/fetchWeatherData'
import { FirstLetter } from './api/firstletter'
import { weatherIcons } from './api/weatherIcon.jsx'
import { WindInfo } from './api/Wind'
import styles from './ui/Card.module.scss'

export const Card = () => {
	const [weatherData, setWeatherData] = useState(null)

	useEffect(() => {
		const getWeather = async () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					async position => {
						const { latitude, longitude } = position.coords
						console.log('lat, lot', latitude, longitude)

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
	}, [])

	if (!weatherData) {
		return (
			<div className='preload'>
				Загрузка данных ...
				<ReactLoading
					type='bars'
					color='#000000'
					height={100}
					width={50}
					className='ml-16'
				/>
			</div>
		)
	}

	const {
		weather: [{ description }],
		name: city,
		main: { feels_like: feelsLike, temp, pressure, humidity },
		wind: { speed: windSpeed, deg: windDegrees },
	} = weatherData

	const weatherDescription = FirstLetter(description)
	const weatherIconComponent = weatherIcons(weatherDescription)
	return (
		<div className={styles.card}>
			<h2 className='card-city'>{city}</h2>

			<div className={styles.cardTop}>
				{weatherIconComponent}
				<div className={styles.cardTemp}>{temp}°C</div>
			</div>

			<div className='card-middle mt-6'>
				<div className='card-state'>{weatherDescription}</div>
				<div className='card-comfort'>Ощущается как {feelsLike}</div>
			</div>

			<div className={styles.cardBottom}>
				<div className={styles.cardWind}>
					<Wind className='ml-4' />
					<WindInfo degrees={windDegrees} speed={windSpeed} />
				</div>
				<div className={styles.cardPressure}>
					<CircleGauge className='ml-4' />
					{pressure} мм рт.ст
				</div>
				<div className={styles.cardHumidity}>
					<Droplet className='ml-4' />
					{humidity}%
				</div>
			</div>
		</div>
	)
}
