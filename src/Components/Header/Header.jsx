import './Header.css'
import boys from '../../images/boys.png'


const Header = () => {
	return (
		<div className='parent'>
			<div className='navbar'>
				<h3>Thrivetalk</h3>
				<ul>
					<li>Home</li>
					<li>About </li>
					<li>Services </li>
					<li>Blog</li>
				</ul>
				<input className='inp' type='button' value='CONTACT US' />
			</div>
			<div className='content'>
				<div className='txtbtn'>
					<div className='txt1'>Thrivetalk</div>
					<div className='txt2'>
						HELPING YOU THRIVE IN ALL AREAS OF LIFE
					</div>
					<div className='txt3'>
						Our highly talented therapists can help you with a range
						of issues including relationships, sex, PTSD,
						depression, social anxiety, or even just caring for
						yourself more.
					</div>
					<div className='INPANDTXT'>
						<input
							className='inp2'
							type='button'
							value='WHO AM I'
						/>
						<a href='' className='textWDID'>
							WHAT DO I DO
						</a>
					</div>
				</div>
				<div className='photoboys'>
					<img src={boys} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Header
