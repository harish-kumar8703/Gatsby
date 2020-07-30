import React from 'react'
import gokul from "../../images/gokul.jpeg"
import gova from "../../images/gova.jpeg"
export default function TeamPhotoSection() {
    return (
        <div className="row">
        <div className="col-10 col-sm-10 mx-auto">
        <div className="card-group">
       
        <div className="card">
          <img src={gokul} height="450" width="940" class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Gokul Krishnan</h5>
          
            <p className="card-text"><small class="text-muted">Data scientist</small></p>
            <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis provident porro modi nisi cumque iure, illum accusantium repellendus doloremque repellat </p>
            
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&h=550&w=940" class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Harish kumar</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi, voluptatibus non eius dolores assumenda repudiandae aliquid veniam iure sequi eligendi vel explicabo voluptates id deserunt placeat quibusdam quae omnis!</p>
            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img src={gova} height="450" width="940" class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Govarthan</h5>
            <p className="card-text"><small className="text-muted">UI/UX designer</small></p>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            
          </div>
        </div>
      </div>
      </div>
        </div>
    )
}
