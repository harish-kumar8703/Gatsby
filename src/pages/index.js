import React from "react"

import{graphql} from"gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import CoarseCart from "../components/Cart/CoarseCart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="text-white">
   <HeroSection 
   img={data.img.childImageSharp.fluid}
   title="SHOP MASK ONLINE"
   subtitle="harish8703.Netlify.app"
   heroclass="hero-background"
   /></div>
   <Infoblock heading="About US" />
   <CoarseCart mycourses={data.courses}/>
   <DualInfoBlock title="our team" imagesource="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Layout>
)

export const query=graphql`
{
  img: file(relativePath:{eq: "heromain1.png" }){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
       description{
        description
      }
        image{
          fixed(width:200 height:100){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`



export default IndexPage
