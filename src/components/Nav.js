import React from 'react'
import './nav.css'
import img from '../images/vector1.svg'
import {NavLink} from 'react-router-dom'
import rect from'../images/rectangle-77.svg'

const Nav = () => {
  return (
    <div className='nav'>
        <header className='img2'>
        <div className='nv'>
        <div className='l'><img src={img} alt="" width={142} height={42}/>
        </div>
        <div class="rec"><img src={rect} alt="" height={50} width={50}/></div>
        <div className='buttons'>
        <button className='btn'><NavLink to='/' style={{textDecoration:'none'}}> <span style={{color:"black"}}>HOME</span></NavLink></button>
        <button className='btn'><NavLink to='/works' style={{textDecoration:'none'}}><span style={{color:"black"}}>WORKS</span></NavLink></button>
        <button className='btn'><NavLink to='/blog' style={{textDecoration:'none'}}><span style={{color:"black"}}>BLOG</span></NavLink></button>
        <button className='btn'><NavLink to='/contact' style={{textDecoration:'none'}}><span style={{color:"black"}}>CONTACT</span></NavLink></button>
        </div>
        </div>
        </header>
    </div>
  )
}

export default Nav