import React from "react";


class Navbar extends React.Component{
    render(){
        console.log(this.props);

        return(
        <nav
            className="navbar navbar-expand-lg " style={
            {backgroundColor:"blue"}}
            >
           <a className="navbar-brand" href="#" style={{color:"white"}}>
            {this.props.title}
           </a>
        </nav>
        );
    }
    
}
export default Navbar;