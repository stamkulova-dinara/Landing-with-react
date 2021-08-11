import './Cards2.css'
import photogirl from '../images/photogirl.png'

const Cards2 = () => {
	return (
		<div className='Cards2'>
			<div className='Cards2cont1'>
				<img src={photogirl} alt='' />
			</div>
			<div className='Cards2cont22'>
				<div className='Cards2txt1'>
					<p className='SI'>SOME INFO</p>
					<p className='LI'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula.
					</p>
				</div>
				<div className='Cards2txt2'>
					<p className='EH'>ENFOLD HEALTH</p>
					<p className='MS'>
						Main Street 1, Olcott Buffalo, United States{' '}
						<p className='num'>
							+555 283 784 333 office@enfold-health.com
						</p>
					</p>
				</div>
				<div className='Cards2txt3'>
					<p className='OH'>OFFICE HOURS</p>
					<p className='MF'>
						Mo-Fr: 8:00-19:00 Sa: 8:00-14:00 Su: closed
					</p>
				</div>
			</div>
		</div>
	)
}

export default Cards2
