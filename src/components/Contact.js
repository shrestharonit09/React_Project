import React from "react";
import { toast } from "react-toastify";


class Contact extends React.Component{
   constructor(props){
    super(props);
    this.state={
        isShowing: false,
        isEditing: false,
        name : this.props.contact.name,
        phone:this.props.contact.phone,
        email:this.props.contact.email,
        error:{}
    };
   }
   handleShowHide=()=>{
    this.setState({isShowing: !this.state.isShowing}); /* for showing data display data when clicked and again hide data when clicked i.e if true then it shows false, when clicked twice the true !=false and data will be hidden again*/
    };
   handleDelete=()=>{
    this.props.delete(this.props.contact.id);
   };
   handleEditing=()=>{
    this.setState({isEditing:true}) ;
    
   };
   handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    };
   handleSubmit=(e)=>{
    e.preventDefault();
    const {name,phone,email}=this.state
    if(name=== ""){
    return this.setState({error:{name :"please enter your name"}});
    }else if (email===""){
     return this.setState({error:{email:"please enter your email"}});
    }else if(phone===""){
     return this.setState({error:{phone:"please enter your phone number"}});
    }
    let editedData={
        name,
        email,
        phone,
        id:this.props.contact.id
    }
    this.props.edit(editedData);
    this.setState({error :{},isEditing:false});
     toast.success("Edit Successfully");
   };
    render(){
        let cls=this.state.isShowing ? 'fa-solid fa-sort-up m-3' : 'fa-solid fa-sort-down m-3'
        const{error}=this.state;
        if (this.state.isEditing){
            return(
                <div className="card w-50  m-auto mt-5">
            <div className="card-header" style={{ backgroundColor :"blue", color:"White" }}>
                <h1>Edit Contact Form</h1>
            </div>
                <div className="card-body">
                <form action="" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                   <label htmlFor="name">Name</label>
                   <input
                    type="text" 
                    placeholder="Name" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    name="name"
                    className="form-control"/>
                    <span style={{color:'red'}}>{error.name}</span>
                  </div>
                  <div className="form-group">
                   <label htmlFor="email">Email</label>
                   <input 
                   type="email" 
                   placeholder="email" 
                   onChange={this.handleChange}
                   value={this.state.email}
                   name="email"
                   className="form-control"/>
                   <span style={{color:'red'}}>{error.email}</span>
                  </div>
                  <div className="form-group">
                   <label htmlFor="phone">Phone</label>
                   <input
                    type="number" 
                    placeholder="Phone" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                    name="phone"
                    className="form-control"/>
                    <span style={{color:'red'}}>{error.phone}</span>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3 ">Edit</button>
                </form>
                </div>
            </div>
          
            )
        }else{
            return(
                <div>
                    <div className="card w-50 mt-5 mx-auto ">
                        <div className="card-header" 
                        style={
                            {
                                backgroundColor:"blue",
                                color: "white",
                                fontWeight:"bold"
                            }}
                            >
                            <h1>  
                                <i 
                                className={cls} /* dynamic handling arrow */
                                onClick={this.handleShowHide}
                                ></i>  
                            {this.props.contact.name} 
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                               <i className="fa-solid fa-trash-can m-3" onClick={this.handleDelete}></i>
                               <i className="fa-solid fa-pen-to-square m-3 "onClick={this.handleEditing}></i>
                            </div>
    
                            </h1>
                            </div>
                        {this.state.isShowing ? (<div className="card-body">
                         <ul className="list-group">
                            <li className="list-group-item">{this.props.contact.phone}</li>
                            <li className="list-group-item">{this.props.contact.email}</li>
                         </ul>
                        </div>
                        ) : null}
                    </div>
                </div>
            );
    

        }
        
    }
}
export default Contact;// import contact from app so to do import operataion export should be done at first;