import '../Styles/Navbar.css'
import { useState } from 'react'
import {AiOutlineHome, AiOutlineCloseSquare } from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'

const Navbar = (props) => {
    const {active, mobile_active, set_mobile_menu_active} = props
    console.log(active, mobile_active)
    const expand__collapse_mobile_menu = () => {
        if (mobile_active === true)  set_mobile_menu_active(false)
        else set_mobile_menu_active(true)
    }
    return (
        <div id='navbar' className={mobile_active? 'navbar-container active' : 'navbar-container'}>
            <div onClick={expand__collapse_mobile_menu} className='mobile-menu'>
                {mobile_active? <AiOutlineCloseSquare color={'#FFFFFF'}size={40}/> : <BiMenu color={'#FFFFFF'}size={40}/>}
            </div>
            <a className={props.active === 'intro'? 'active': null}  href='#intro'>Home</a>
            <a className={props.active === 'skills'? 'active': null} href='#skills'>Skills</a>
            <a className={props.active === 'about'? 'active': null} href='#about'>About Me</a>
            <a className={props.active === 'projects'? 'active': null} href='#projects'>Projects</a>
            <a className={props.active === ''? 'active': null} href='#contact'>Contact</a>
        
        </div>
    )
}

export default Navbar