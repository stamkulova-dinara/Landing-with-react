import './Block1.css'
import girl from '../images/girl.png'

const block1 = () => {
	return (
		<div className='block1'>
			<div className='b1txt'>
				<p className='b1txt1'>Why Thrive?</p>
				<div className='b1txt2'>
					<span>
						Want to improve your well-being from the comfort of your
						own couch? Are you having trouble finding the right
						therapist?
					</span>
					Here at ThriveTalk, our licensed therapists provide the same
					quality care you would get in office from anywhere you can
					access your laptop or mobile phone. Become your best self
					with ThriveTalk. Start therapy now with a licensed
					therapist!
				</div>
			</div>
			<div className='b1photo'>
				<img src={girl} alt='' />
			</div>
		</div>
	)
}

export default block1
