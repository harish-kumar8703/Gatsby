import React from 'react'
import BackgroundImage from"gatsby-background-image"
const HeroSection=({img,title,subtitle,heroclass})=>{
    return (
      <BackgroundImage className={heroclass} fluid={img}>
      <h1 className="text-black text-uppercase text-center display-4">{title}</h1>
      <div>
      <h4 className="text-info">{subtitle}</h4>
      </div>
      
      
      </BackgroundImage>
    )
}

export default HeroSection