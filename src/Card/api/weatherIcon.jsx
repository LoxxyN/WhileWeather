import {
	Cloud,
	CloudDrizzle,
	CloudLightning,
	CloudRain,
	CloudSnow,
	CloudSun,
	Cloudy,
	Sun,
} from 'lucide-react'

export const weatherIcons = description => {
	return description == 'Ясно' ? (
		<Sun className='ml-5' />
	) : description == 'Пасмурно' ? (
		<Cloudy className='ml-5' />
	) : description == 'Переменная облачность' ? (
		<CloudSun className='ml-5' />
	) : description == 'Облачно' ? (
		<Cloud className='ml-5' />
	) : description == 'Дождь' ? (
		<CloudDrizzle className='ml-5' />
	) : description == 'Гроза' ? (
		<CloudLightning className='ml-5' />
	) : description == 'Снег' ? (
		<CloudSnow className='ml-5' />
	) : description == 'Сильный дождь' ? (
		<CloudRain className='ml-5' />
	) : (
		<CloudSun className='ml-5' />
	)
}
