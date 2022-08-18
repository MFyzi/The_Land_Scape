import React from 'react'
import { Link } from 'react-router-dom';
import './navigation.css';
import { BiHomeSmile,BiVideo,BiHelpCircle } from "react-icons/bi";

function Navigation() {
    console.log('fasdf')
  return (
    <nav className='navbar'>
        <ul>
            <li>
               <Link className='navbar_link' to='/'>
                <BiHomeSmile/> 
                </Link>
               <Link
               className='navbar_link_name' to='/'>
                Home 
                </Link>
            </li>
            <li>
                <Link className='navbar_link' to='/events'>
                    <BiVideo />
                </Link>
                <Link className='navbar_link_name' to='/events'>
                    Event 
                </Link>
            </li>
            <li>
                <Link className='navbar_link' to='/enquiry'>
                    <BiHelpCircle/>
                </Link>
                <Link className='navbar_link_name' to='/enquiry'>
                    Enquiry 
                </Link>
                
            </li>
        </ul>
    </nav>
  )
}

export default Navigation