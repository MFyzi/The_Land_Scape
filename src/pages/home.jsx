import React from 'react'
import Pic from '../test/pexels.jpg'
import Slider from '../components/slider'
import './home.css'

function Home() {
  
  return (
    <div className="new">

      <Slider 
      myStyles ={{
      backgroundImage: `url(${Pic})`,
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundAttachment:'fixed'
    }}
      pic = {Pic}
      header="The Lake"
      disc="expolre bautiful lakes around the world, We organaizing an journy to explore the crystal lakes around the world"
      />
    </div>
  )
}

export default Home