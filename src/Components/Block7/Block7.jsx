import './Block7.css'
import charles from '../../images/charles.png'

const Block7 = () => {
	return (
		<div className='Block7'>
			<div className='bl7cont1'>
				<div className='bl7txt1'>CONTACT US</div>
				<div className='bl7txt2'>Ready. Set. Smile</div>
				<div className='bl7txt3'>
					Take the free online assessment to see if you are a
					candidate and get started on your journey.
				</div>
				<div className='bl7txt4'>GET HELP NOW</div>
			</div>
			<div className='bl7cont2'>
				<img src={charles} alt='' />
			</div>
		</div>
	)
}

export default Block7
