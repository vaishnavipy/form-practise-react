

import './App.css';
import React,{Component} from "react";



class App extends React.Component {
  state={
    fname:"",
    lname:"",
    age:"",
    gender:"",
    destination:"",
    isVegan:false,
    isKosher:false
  }

  handleChange=(event)=>{
      const {name,value,type,checked} = event.target;

      if(type == "checkbox"){
        this.setState({[name]:checked})
      

      }else{

        this.setState({[name]:value}) }

  }
  
  
  render(){
  return (
    <div >
       {/*Input Type Text*/}
      <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} placeholder="FirstName" className="inputs"/><br/>
      <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} placeholder="LastName"  className="inputs"/><br/>
      <input type="text" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age"  className="inputs"/><br/>
      
       {/*Input Type Radio Button*/}

       <input type="radio" id="male" name="gender" value="male" onChange={this.handleChange} />
      <label for="male">Male</label><br />
      <input type="radio" id="female" name="gender" value="female" onChange={this.handleChange}/>
      <label for="female">Female</label><br/>

      {/*Select DropDown*/}

      <select name="destination" id="cars" value={this.state.destination} onChange={this.handleChange}>
    <option value="India">India</option>
    <option value="USA">USA</option>
    <option value="UK">UK</option>
    <option value="Canada">Canada</option>
     </select><br/>

      {/*CheckBox*/}

     
      <input type="checkbox"  onChange={this.handleChange} id="vegan" name="isVegan" checked={this.state.isVegan}/>
      <label for="vegan" >Vegan</label>

      <input type="checkbox" onChange={this.handleChange} id="kosher" name="isKosher" chekced={this.state.isKosher}/>
      <label for="kosher" >Kosher?</label>

      

      <hr />
      {/*Now print the form in the para*/}
      <div className="information">
      <h1 >Entered Information</h1>
      <p>Your Name is : {this.state.fname} {this.state.lname}</p>
      <p>Your age is: {this.state.age}</p>
      <p>Your Gender is: {this.state.gender}</p>
      <p>Your Destination is: {this.state.destination}</p>

      <p>Vegan: {this.state.isVegan ? "Yes":"No"}</p>
      <p>Kosher: {this.state.isKosher ? "Yes":"No"}</p>

      </div>
    </div>
  ) 

}
}

export default App;
