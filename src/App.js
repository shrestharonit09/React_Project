import React from 'react';//React comes from node modules react;
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  state={
    contact:[
      {id:1, name:"Ronit Shrestha",phone:9810113,email:"ram1@gmail.com"},
      {id:2, name:"Utsav Sapkota",phone:9810114,email:"hari@gmail.com"},
      {id:3, name:"Ashwin khadka",phone:9810115,email:"sita1@gmail.com"}
    ],
    //showHide: false

  };
  // //handleClick= ()=>{
  //   this.setState({showHide:!this.state.showHide });
  //   console.log("called");
  // }
  handleDelete=(id)=>{
  //  console.log(id);
    let filterData= this.state.contact.filter(function(contact){
      return contact.id!==id /*same id are filter out and other are stored on filterData same id (selected  which are going to be deleted)*/ 
    });
    // from SweetAlert2 extension 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState({contact: filterData}); /* state update this is for delete display updation other are jst extension for delete operation*/
        toast.success("Deleted Successfully !!");// for notification using react-toastify and export in <ToastContainer/>
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };
  handleSubmittedData=(formData)=>{
    this.setState({contact:[formData, ...this.state.contact]});// spread operator to store previous data , if not used only single data will be store and each time new data are replaced with old one;
  toast.success("data inserted");
  };
  handleEditData=(editData)=>{
    let editContact=this.state.contact.map(function(contact){
      if(editData.id===contact.id){
        return editData;
      }
      return contact;
    })
    this.setState({contact: editContact})

  };
  render(){
    //console.log(this.state.showHide);
    return(
      <div>
        <Navbar title="Contact Management System"/>

        <Form formData={this.handleSubmittedData} />
        
        {this.state.contact.map(contact=>(
           <Contact contact={contact} key={contact.id} delete={this.handleDelete} edit={this.handleEditData} />/* delete is props that calls function based which passes function i,e handleDelete)*/
           ))}
  
         <ToastContainer /> 
      </div>
    )
  }

}
export default App;//accessing single class we use export default;
