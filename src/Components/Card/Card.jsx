import './Card.css'

// const Card=() =>{

// }
const Boxs = (props) => {
	return (
		<div className={props.class}>
			<p className='lines'> ______________________</p>
			<p className='titles'>{props.title}</p>
		</div>
	)
}

const Card = () => {
	let CardData = [
		{ id: 1, title: 'Weight Lifting', class: 'minbox1' },
		{ id: 2, title: 'Running  & Spinning', class: 'minbox2' },
		{ id: 3, title: 'Pumping Iron', class: 'minbox3' },
		{ id: 4, title: 'Pumping Iron', class: 'minbox4' },
	]

	let CardElement = CardData.map((el) => {
		return (
			<Boxs
				title={el.title}
				description={el.description}
				class={el.class}
			/>
		)
	})

	return <div className='parentCard'>{CardElement}</div>
}

export default Card
