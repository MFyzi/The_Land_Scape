import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './events.css'

function Events() {
  return (
    <nav className="event_navigation">
      <ul className='event_navigation_ul'>
        <li>
          <Link className='event_navigation_link' 
          to='./upcoming'>
            Upcoming
          </Link>
        </li>
        <li>
          <Link className='event_navigation_link' 
          to='./watchlist'>
            Watchlist
          </Link>
        </li>
      </ul>
      <Outlet/>
    </nav>
  )
}

export default Events