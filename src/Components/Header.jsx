import React, { useState } from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
import Bars from '../assets/bars.png'
import { Link } from 'react-scroll'


const Header = () => {

    const mobile = window.innerWidth<=768 ? true: false;
    const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" id='header'>

        <img className="logo" src ={Logo} alt='Website Logo' />

        {menuOpened === false && mobile === true ? (
            <div style={{backgroundColor: 'var(--appColor', 
                        padding:'0.5rem',
                        borderRadius:'5px'}}
                        onClick={ () =>setMenuOpened(true)}>
                <img src={Bars} alt="" style={{width:'1.5rem', height:'1.5rem' }} />     
            </div>
        ) : (
            <ul className='header-menu'>
            <li >
                    <Link
                        onClick={()=> setMenuOpened(false)}
                        to='header'   //find the ID, or can give 'hero' too
                        activeClass='active'  //Default 
                        spy={true}
                        smooth={true}
                    >Home</Link>
            </li>

            <li>
                    <Link
                        onClick={()=> setMenuOpened(false)}
                        to='programs'   //find the ID
                        spy={true}
                        smooth={true}
                    >Programs</Link>
            </li>
            <li>
                    <Link
                        onClick={()=> setMenuOpened(false)}
                        to='reasons'   //find the ID
                        spy={true}
                        smooth={true}
                    >Why us</Link>
            </li>
            <li>
                    <Link
                        onClick={()=> setMenuOpened(false)}
                        to='Plans'   //find the ID
                        spy={true}
                        smooth={true}
                    >Plans</Link>
            </li>
            <li>
                    <Link
                        onClick={()=> setMenuOpened(false)}
                        to='testimonials'   //find the ID
                        spy={true}
                        smooth={true}
                    >Testimonials</Link>
            </li>
        </ul>

        )}

     
        
    </div>
)}

export default Header