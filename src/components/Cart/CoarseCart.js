import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from "gatsby-image"


export default function CoarseCart({courses,mycourses}) {
   
    return (
       <section className="py-5">
       <div className="container">
       <Heading title="OUR PRODUCTS" />
       <div className="row">
       {mycourses.edges.map(({node})=>{
        return(

          <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto" > 
             <Img fixed={node.image.fixed} />
            <div className="flex-grow-1 px-3">
            <div className="d-flex ">
            <h6 className="mb-0">
            {node.title}</h6>
            <h6 className="mb-0 text-success ml-3">
            ${node.price}</h6>

            </div>
            <p className="text-muted"><small>
            {node.description.description}</small></p>
            <button data-item-id={node.id}
            data-item-name={node.title}
            data-item-price={node.price}
            data-item-url="https://harish8703.netlify.app/"
            data-item-image={node.image.fixed.src}
            className="btn btn-warning snipcart-add-item">Buy Now</button>
            </div>
            </div>
        )
       })}
       </div>
       </div>
       
       </section>
    )
}

