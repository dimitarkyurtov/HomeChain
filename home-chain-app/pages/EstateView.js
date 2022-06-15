import React, { useState, useEffect } from 'react'
import Link from 'next/link'

var arrImg = new Array()
arrImg[0] = 'https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/slideshow/AM1506.jpg'
arrImg[1] = 'https://smilyhomes.com/wp-content/uploads/2022/05/house.jpg'
arrImg[2] = 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
arrImg[3] = 'https://images.adsttc.com/media/images/623c/79f4/40c9/f001/65ef/d5bf/medium_jpg/035-z-line-house-mssm-associates.jpg'
arrImg[4] = 'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg'
arrImg[5] = 'https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg'
arrImg[6] = 'https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg'
arrImg[7] = 'https://lede-admin.blockclubchicago.org/wp-content/uploads/sites/5/2019/06/pinkhouse2.jpg'
arrImg[8] = 'https://media.udoma.bg/539/conversions/Marvell-House-2-large.jpg' 
arrImg[9] = 'https://media-cdn.tripadvisor.com/media/photo-s/12/4c/0a/ba/montecristo-country-house.jpg'


export default function EstateView(props) {
  const [estate, setEstate] = useState({})

  return (
    <div class="EstateView">
      <div className='item'>
        <div>
          <img src = {arrImg[Math.floor(Math.random()*arrImg.length)]}/>
      </div>

      <div className='header1'><h1>Estate details:</h1></div>
      <div className='Text'>
          <p>Description: {props.estate.description}</p>
      </div>
          <button onClick={() => props.setActiveTab('View', props.id)} className='button is-primary'>
              Detailed view
          </button>
      </div>
    </div>
  )
}
