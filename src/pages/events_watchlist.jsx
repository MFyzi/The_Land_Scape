import React from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import './watchlist.css'


function EventsWatchlist() {
  const [videoUrl, setVideoUrl] = useState('')
  const [hoverValue,setHoverValue]=useState('')
  // const [videoDB, setVideoDB] = useState({})
  const{fetch} =useFetch(4,'snow','mountain')

  // useEffect(() => {
  //   const eventSection2 = fetch.map(item=>{
  //     return{
  //       url:item.videos.medium.url,
  //   }
  //   })
  //   setVideoDB(eventSection2)
  // }, [fetch])
  
  // console.log(videoDB[0].url)

  // const videosSection = ()=>{
  //   videoDB.forEach(element => {
  //     return(
  //       <video
  //       src={`${item.videos.medium.url}`}
  //       ></video>
  //     )
  //   });
  // }

  const eventSection = fetch.map((item,index) =>
      {
         return(
          <div className={`video video${item.id}`}>
               <video  
               hover = {hoverValue}
               onMouseEnter={()=>{
                 setHoverValue(`${item.id}`)
                }}
                onMouseLeave={()=>{
                  setHoverValue('')
                }}           
                onClick ={()=>setVideoUrl(item.videos.medium.url)}
                src={`${item.videos.medium.url}`}
                style={{cursor:'pointer'}}
                >        
              </video>
              <i className='watchlist_video_count'>{`epiosde ${index+1}`}</i>
              {hoverValue===`${item.id}` ? 
              <i className="watchlist_video_mention">{`From Pixabay, by ${item.user} `}</i> 
              :""}
            </div>
         )
        }
  )

  
  return (
    <div className="watchlist">
      <div className="watchlist_container">
          <h2>Desert Eye</h2>
        <div className="watchlist_videosection">
          <div className="watchlist_discription">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati asperiores consequatur corrupti iusto aliquid officiis, nam rerum quaerat quia, voluptas ad in exercitationem repellendus nostrum.</p>
          </div>
          <div className="watchlist_hero">
            {videoUrl==='' ? eventSection[0] :
            <video
              controls 
              src={videoUrl}
              onClick={(e)=>e.target.play()}>        
            </video>
            }
          </div>
          <div className="watchlist_video-carousel">
              {eventSection}
          </div>
        </div>
      <h2 className='side_banner'>WATCHLIST</h2>
      <h2 className='side_banner_2'>WATCHLIST</h2>
      </div>
    </div>
  )
}

export default EventsWatchlist