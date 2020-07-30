import React from "react"

import{graphql} from"gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const Service = ({data}) => (
  <Layout>
    <SEO title="Home" />
   <HeroSection
   img={data.img.childImageSharp.fluid}
   title=""
   subtitle=""
   heroclass="hero-background"
   />
  
  
  </Layout>
)

export const query=graphql`
{
  img: file(relativePath:{eq:"service.jpg" }){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`



export default Service
