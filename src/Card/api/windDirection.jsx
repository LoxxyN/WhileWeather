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
			<ArrowUp /> С
		</>
	) : degrees >= 1 && degrees < 89 ? (
		<>
			<ArrowUpRight /> СВ
		</>
	) : degrees == 90 ? (
		<>
			<ArrowRight /> В
		</>
	) : degrees >= 91 && degrees < 179 ? (
		<>
			<ArrowDownRight /> ЮВ
		</>
	) : degrees == 180 ? (
		<>
			<ArrowDown /> Ю
		</>
	) : degrees >= 181 && degrees < 269 ? (
		<>
			<ArrowDownLeft /> ЮЗ
		</>
	) : degrees == 270 ? (
		<>
			<ArrowLeft /> З
		</>
	) : degrees >= 271 && degrees < 359 ? (
		<>
			<ArrowUpLeft /> СЗ
		</>
	) : (
		'С'
	)
}
