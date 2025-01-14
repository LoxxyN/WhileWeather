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
		<Sun className='ml-5' size={36} />
	) : description == 'Пасмурно' ? (
		<Cloudy className='ml-5' size={36} />
	) : description == 'Переменная облачность' ? (
		<CloudSun className='ml-5' size={36} />
	) : description == 'Облачно' ? (
		<Cloud className='ml-5' size={36} />
	) : description == 'Дождь' ? (
		<CloudDrizzle className='ml-5' size={36} />
	) : description == 'Гроза' ? (
		<CloudLightning className='ml-5' size={36} />
	) : description == 'Снег' ? (
		<CloudSnow className='ml-5' size={36} />
	) : description == 'Сильный дождь' ? (
		<CloudRain className='ml-5' size={36} />
	) : (
		<CloudSun className='ml-5' size={36} />
	)
}
