import '../Styles/Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'

const Navbar = (props) => {
    console.log(props.active)
    return (
        <div className='navbar-container'>
            <a className={props.active === 'intro'? 'active': null}  href='#intro'>Home</a>
            <a className={props.active === 'skills'? 'active': null} href='#skills'>Skills</a>
            <a className={props.active === 'about'? 'active': null} href='#about'>About</a>
            <a className={props.active === 'projects'? 'active': null} href='#projects'>Projects</a>
            <a className={props.active === ''? 'active': null} href='#contact'>Contact</a>
        
        </div>
    )
}

export default Navbar