import React from 'react'

function Slider(prop) {
  return (
    <div className='slide' 
    style={{
    }}>
        <div className="slide_image_container"
        style={prop.myStyles}>
            <div className="slide_disc_container">
                <h2 className='slide_dic_container_header'>JOIN US</h2>
                <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto velit ut !</p>
            </div>
            <div className="header">
                <h1>The Lake</h1>
            </div>
        </div>
    </div>
  )
}

export default Slider