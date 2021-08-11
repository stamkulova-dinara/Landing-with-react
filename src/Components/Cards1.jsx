import './Cards1.css'
const Box1 = (props) => {
	return (
		<div className={props.class}>
			<p className='ttitle'>{props.title}</p>
			<div className='ttext'>{props.text}</div>
		</div>
	)
}

const Cards1 = () => {
	let CardsData1 = [
		{
			id: 1,
			title: 'Nutritional Plans',
			text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
			class: 'minibox11',
		},
		{
			id: 2,
			title: 'Weight Loss',
			text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
			class: 'minibox12',
		},
		{
			id: 3,
			title: 'Mental Peace',
			text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
			class: 'minibox13',
		},
		{
			id: 4,
			title: 'Home Training',
			text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
			class: 'minibox14',
		},
		{
			id: 5,
			title: 'Work/Life Balance',
			text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
			class: 'minibox15',
		},
		{
			id: 6,
			title: 'Cardio',
			text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
			class: 'minibox16',
		},
	]

	let CardsElement1 = CardsData1.map((el) => {
		return <Box1 title={el.title} class={el.class} text={el.text} />
	})

	return <div className='parentCards1'>{CardsElement1}</div>
}

export default Cards1
