import React, { useState } from 'react'
import './eventsUpcoming.css'
import useFetch from '../hooks/useFetch'

function EventsUpcoming() {
  const{fetch} =useFetch(4,'forest','tree')
    
    const [hoverValue,setHoverValue]=useState('')
    const eventSection = fetch.map(item =>
        {
           return(
            <div  className="upcoming_event_video" >
                 <video 
                 hover = {hoverValue}
                        onMouseEnter={e=>{
                            e.target.play()
                            setHoverValue(`${item.id}`)
                        }}
                        onMouseLeave={e=>{
                            e.target.pause()
                            setHoverValue('')
                        }} 
                        src={`${item.videos.medium.url}`}
                        className={`event_video event_video_${item.id}`} loop muted>        
                </video>
                {hoverValue===`${item.id}` ? <i className="event_video_mention">{`From Pixabay, by ${item.user} `}</i> :""}
            </div>
           )
        }
    )
  return (
    <div className='eventupcoming_container'>
          <h2>Ocean Exloration</h2>
      <div className="eventupcoming_container_hero">
        <div className="eventupcoming_container_discription">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati asperiores consequatur corrupti iusto aliquid officiis, nam rerum quaerat quia, voluptas ad in exercitationem repellendus nostrum.</p>
        </div>
        <div className="eventupcoming_container_videos">
          {eventSection}
        </div>
      </div>
      <h2 className='side_banner'>UPCOMING</h2>
      <h2 className='side_banner_2'>UPCOMING</h2>
        
    </div>
  )
}

export default EventsUpcoming




