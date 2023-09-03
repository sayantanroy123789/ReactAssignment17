import React from 'react'
import './style.css'
import { BsHouseExclamationFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
        <div style={{fontSize:"24px"}}><BsHouseExclamationFill/></div>
        <div style={{width:"40%", display:"flex", justifyContent:"space-evenly"}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/more'>More</Link>
        </div>
       
    </div>
  )
}

export default Header