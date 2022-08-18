import React from 'react'
import Navigation from './components/Navigation'
import { Route, Routes} from 'react-router-dom'
import './scss/index.css'
import Home from './pages/home'
import Events from './pages/events'
import Enquiry from './pages/enquiry'
import EventsUpcoming from './pages/events_upcoming'
import EventsWatchlist from './pages/events_watchlist'

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <Routes >
        <Route path='/' element={<Home/> }/>
        {/* <BrowserRouter */}
        <Route path='events' element={<Events/> }>
          <Route path='upcoming' element={<EventsUpcoming/>}/>
          <Route path='watchlist' element={<EventsWatchlist/>}/>
        </Route>
        <Route path='enquiry' element={<Enquiry/> }/>
      </Routes>
    </div>


  )
}

export default App