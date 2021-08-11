import './Block6.css'
import men from '../images/men.png'

const Block6 = () => {
	return (
		<div className='Block6'>
			<div className='bl6cont1'>
				<img src={men} alt='' />
			</div>
			<div className='bl6cont2'>
				<div className='bl6txt1'>YOU SHOULD ALSO KNOW</div>
				<div className='bl6txt2'>
					MDD affects more than 16.1 million American adults, or about
					6.7%of the U.S. population age 18 and older in a given year.
					We at ThriveTalk can help you.
				</div>
				<div className='bl6txt3'>GET HELP NOW</div>
			</div>
		</div>
	)
}

export default Block6
