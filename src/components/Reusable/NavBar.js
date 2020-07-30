import React, { Component } from 'react'
import {Link} from "gatsby"
import {FaHome} from "react-icons/fa"
export default class NavBar extends Component {
state={
    navbarState:false,
    navbarClass:"collapse navbar-collapse",
    menus:[{
        id:1,text:"Home",url:"/",
},
{
    id:2,text:"About",url:"/About/",
    },{
        id:3,text:"Services",url:"/Service/",
    }
,{
    id:4,text:"Contact",url:"/Contact",
}]
}
myToggler=()=>{
    this.state.navbarState?this.setState({
        navbarState:false,
        navbarClass:"collapse navbar-collapse",
        
    }):this.setState({
        navbarState:true,
        navbarClass:"collapse navbar-collapse show",
       })
}
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-dark text-light">
           <Link to="/" className="navbar-brand ml-5">
           <FaHome/>
           </Link>
         <button className="navbar-toggler" type="button" onClick={this.myToggler}>
         <span className="text-white">menu</span>
         </button>
         <div className={this.state.navbarClass}>
         <ul className="navbar-nav ml-auto mr-5">
         {this.state.menus.map(menu=>{
             return(
                <li key={menu.id} className="nav-item">
                <Link to={menu.url} className="nav-link">{menu.text}</Link>
                </li>
             )
         })}
        
        </ul>
         
         </div>
           </nav>
        )
    }
}
