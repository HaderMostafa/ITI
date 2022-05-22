import React, { Component } from 'react';

export default class AddStudent extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      formData:{
        name:'',
        age:0,
      }
    }
  }

  render() {

    const parentCallBack= ()=>{
      this.props.parentCallBack(this.state.formData) 
    }
    
    const onAddStudentClick=()=>{
    parentCallBack();
    };

    const updateFormDataName = (inputValue) => {
        this.setState({
          formData: {
            name:inputValue,
            age:this.state.formData.age
          }
        })
    };

    const updateFormDataAge = (inputValue) => {
        this.setState({
          formData: {
            name:this.state.formData.name,
            age:inputValue,
          }
        })
    };

    return (
      <div>
          <input name={"name"} placeholder={"Name"} value={this.state.formData.name}
          onChange={e => updateFormDataName( e.target.value)}/>
      <div>
          <input name={"age"} placeholder={"Age"} value={this.state.formData.age}
          onChange={e => updateFormDataAge( e.target.value)}/>
      </div>
        <input type="button" className="btn btn-primary" value="Add" onClick={onAddStudentClick}/>
      </div>
    )
  }
}
