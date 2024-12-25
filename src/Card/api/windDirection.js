export const windDirection = degrees => {
	return degrees == 0
		? 'С'
		: degrees >= 1 && degrees < 89
		? 'СВ'
		: degrees == 90
		? 'В'
		: degrees >= 91 && degrees < 179
		? 'ЮВ'
		: degrees == 180
		? 'Ю'
		: degrees >= 181 && degrees < 269
		? 'ЮЗ'
		: degrees == 270
		? 'З'
		: degrees >= 271 && degrees < 359 > 'СЗ'
}
