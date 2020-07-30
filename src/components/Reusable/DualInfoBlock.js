import React from 'react'
import Heading from './Heading'
import {Link} from "gatsby"
export default function DualInfoBlock({heading,imagesource}) {
    return (
        <div className="my-4 py-4 bg-dark text-white">
            <div className="container">
            <Heading title={heading}/>
            <div className="row">
            <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
            
            The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 
            </p>
            </div>
            <div className="col-4">
            <div class="card text-dark">
  <img src={imagesource} class="card-img-top" alt="image goes here"/>
 
    
  </div>
</div>
            
            </div>
            </div>
            
        </div>
    )
}
