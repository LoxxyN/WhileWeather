import styles from '../ui/Card.module.scss'
import windDirection from './windDirection'

export const WindInfo = ({ speed, degrees }) => {
	const windDegrees = windDirection(degrees)
	return (
		<div className={styles.windInfo}>
			{windDegrees}°, {speed} м/с
		</div>
	)
}
