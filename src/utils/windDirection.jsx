import {
	ArrowDown,
	ArrowDownLeft,
	ArrowDownRight,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	ArrowUpLeft,
	ArrowUpRight,
} from 'lucide-react'

export const windDirection = degrees => {
	return degrees == 0 ? (
		<>
			<ArrowUp /> Ю
		</>
	) : degrees >= 1 && degrees < 89 ? (
		<>
			<ArrowUpRight /> ЮЗ
		</>
	) : degrees == 90 ? (
		<>
			<ArrowRight /> З
		</>
	) : degrees >= 91 && degrees < 179 ? (
		<>
			<ArrowDownRight /> СЗ
		</>
	) : degrees == 180 ? (
		<>
			<ArrowDown /> С
		</>
	) : degrees >= 181 && degrees < 269 ? (
		<>
			<ArrowDownLeft /> СВ
		</>
	) : degrees == 270 ? (
		<>
			<ArrowLeft /> В
		</>
	) : degrees >= 271 && degrees < 359 ? (
		<>
			<ArrowUpLeft /> ЮВ
		</>
	) : (
		'Ю'
	)
}
