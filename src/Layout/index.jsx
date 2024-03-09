import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Logo from '../assets/Logo.svg'
import One from '../assets/one.svg'
import Two from '../assets/two.svg'
import Three from '../assets/three.svg'
import Four from '../assets/four.svg'
import Boy from '../assets/boy.svg'

function Layout({children}) {
  return (
    <div className='layout-wrapper'>
         <div className="sidebar">
                <div className="menus">
                    <Link className='Logo' to = '/'>
                    <img src={Logo} alt="" />
                    </Link>
                    <Link to = '/'>
                    <img src={One} alt="" />
                    </Link>
                    <Link to = '/Movies'>
                    <img src={Two} alt="" />
                    </Link>
                    <Link to = '/Series'>
                    <img src={Three} alt="" />
                    </Link>
                    <Link to = '/Bookmarks'>
                    <img src={One} alt="" />
                    </Link>
                </div>
                <div className="user">
                    <img src={Boy} alt="" />
                </div>
         </div>
      <div className="main">
        <header>
            <input className='inputt' type="  text" placeholder='Search for movies or TV series' />
          <div className="content">
            {
              children
            }
          </div>
        </header>
      </div>
    </div>
  )
}

export default Layout