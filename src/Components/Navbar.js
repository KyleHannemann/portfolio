import '../Styles/Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'

const Navbar = () => {

    return (
        <div className='navbar-container'>
            <a href='#intro'><AiOutlineHome/></a>
            <a href='#skills'>Skills</a>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        
        </div>
    )
}

export default Navbar