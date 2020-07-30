import React from "react"

import{graphql} from"gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="text-white">
   <HeroSection
   img={data.img.childImageSharp.fluid}
   title="About Us"
   subtitle=""
   heroclass="about-background"
   /></div>
   <Infoblock heading="About our vision" />
   <DualInfoBlock title="A message from ceo" imagesource="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
   <TeamPhotoSection/>
  </Layout>
)

export const query=graphql`
{
  img: file(relativePath:{eq: "about.png" }){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`



export default AboutPage
