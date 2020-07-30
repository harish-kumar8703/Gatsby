import React from 'react'
import Heading from './Heading'
import {Link} from "gatsby"

export default function Infoblock({heading}) {
    return (
        <section className="bg-dark my-5 py-4">
        <div className="container">
        <Heading title={heading}/>
        <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
        <p className="lead text-white mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae, earum accusantium ea ex rerum expedita esse alias non. Doloribus laborum laudantium veniam similique id? Culpa, sed! Iure necessitatibus ipsa nihil odit quod laudantium amet earum. Nulla consectetur voluptatem nemo repellat vel, dolores iure laborum ullam accusantium quis fuga? Cum.
        </p>
        <Link to="/about">
        <button className="btn btn-warning btn-lg">
        {heading}
        </button>
        </Link>
        </div>
        </div>
        </div>

        </section>
    )
}
