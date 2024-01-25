import React from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'


const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter  innerWidth h-container">
                <img src="./logo.png" alt="logo" width={'100px'}></img>
                <div className="flexCenter h-menu">
                    <a>Residencies</a>
                    <a>Our values</a>
                    <a>Contact Us</a>
                    <a>Get Started</a>
                    <button className='button'><a>Contact</a></button>
                </div>
                <div className="menu-icon">
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}
export default Header;