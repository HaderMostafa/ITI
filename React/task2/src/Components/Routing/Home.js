import AddStudent from '../ComponentInteraction/AddStudent';
import Students from "../ComponentInteraction/Students";
import StudentsList from '../ComponentInteraction/students.json';
import React, { Component } from 'react';

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      studentsArrAfterAdd:StudentsList.students
    }
  }    
  
  callBackFunction = (data)=>{
    this.state.studentsArrAfterAdd.push(data)
    this.setState({studentsArrAfterAdd:this.state.studentsArrAfterAdd})
  }
  
  render() {
    return (
        <div>
            <AddStudent parentCallBack={this.callBackFunction}></AddStudent>
            <Students studentsList={this.state.studentsArrAfterAdd}></Students>
        </div>
    )
  }
}

