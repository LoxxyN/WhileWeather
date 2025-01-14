import ReactLoading from 'react-loading'

export const Preloader = () => {
	return (
		<div className='preloader'>
			<p>Загрузка данных ...</p>
			<ReactLoading
				className='ml-16'
				type='bars'
				color='#000000'
				height={100}
				width={50}
			/>
		</div>
	)
}
