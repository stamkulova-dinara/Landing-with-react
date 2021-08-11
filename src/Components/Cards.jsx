import './Cards.css'

const Box = (props) => {
	return (
		<div className={props.class}>
			<p className='line'> ______________________</p>
			<p className='title'>{props.title}</p>
		</div>
	)
}

const Cards = () => {
	let CardsData = [
		{ id: 1, title: 'Physical Health', class: 'minibox1' },
		{ id: 2, title: 'Mental Health', class: 'minibox2' },
		{ id: 3, title: 'Nutrition', class: 'minibox3' },
		{ id: 4, title: 'Gymnastics', class: 'minibox4' },
		{ id: 5, title: 'Crossfit', class: 'minibox5' },
		{ id: 6, title: 'Aerobics', class: 'minibox6' },
	]

	let CardsElement = CardsData.map((el) => {
		return <Box title={el.title} class={el.class} />
	})

	return <div className='parentCards'>{CardsElement}</div>
}

export default Cards
