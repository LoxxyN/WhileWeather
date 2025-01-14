import { CircleGauge, Droplet, Wind } from 'lucide-react'
import { FirstLetter } from '../utils/firstletter.js'
import { useWeatherData } from '../utils/hooks/useWeatherData.js'
import { weatherIcons } from '../utils/weatherIcon.jsx'
import { WindInfo } from '../utils/Wind.jsx'
import styles from './ui/Card.module.scss'
import { Preloader } from './ui/preloader.jsx'

export const Card = () => {
	const weatherData = useWeatherData()

	if (!weatherData) {
		return <Preloader />
	}

	const getThemeClass = time => {
		if (time == 0 && time <= 6) {
			return styles.appThemeNight
		} else if (time >= 7 && time <= 11) {
			return styles.appThemeSunrise
		} else if (time >= 12 && time <= 18) {
			return styles.appThemeDay
		} else if (time >= 19 && time <= 23) {
			return styles.appThemeSunset
		}
	}

	const {
		weather: [{ description }],
		name: city,
		main: { feels_like: feelsLike, temp, pressure, humidity },
		wind: { speed: windSpeed, deg: windDegrees },
	} = weatherData
	const hoursNow = new Date().getHours()
	const weatherDescription = FirstLetter(description)
	const weatherIconComponent = weatherIcons(weatherDescription)
	const themeClass = getThemeClass(hoursNow)

	return (
		<div className={`${styles.card} ${themeClass}`}>
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
