import './App.css'
import { Card } from './Card/Card.jsx'
import styles from './Card/ui/Card.module.scss'

function App() {
	return (
		<>
			<Card className={styles.card} />
		</>
	)
}

export default App
