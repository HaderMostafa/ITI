import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  //dept:Department=new Department (1,"OS","Alex");

  dept:Department=new Department(0,"","");

  ndept:Department=new Department (0,"","");

  depts:Department[]=[
    new Department (1,"OS","Alex"),
    new Department(2,"PD","Smart"),
    new Department(3,"Mobile","Mansora"),
    new Department(4,"PD","Alex")
  ]

  add(){
    this.depts.push(new Department(this.ndept.id,this.ndept.deptName,this.ndept.location));
  
    this.ndept.id=0;
    this.ndept.deptName="";
    this.ndept.location="";
  }

  show(deptid:number){
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id==deptid) {
        this.dept=this.depts[i];
        break;
      }
    }
  }

  edit(deptid:number){
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id==deptid) {
        this.depts[i].id=this.ndept.id;
        this.depts[i].deptName=this.ndept.deptName;
        this.depts[i].location=this.ndept.location;

        this.ndept.id=0;
        this.ndept.deptName="";
        this.ndept.location="";
        break;
      }
    }
  }

  delete(deptid:number){
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id==deptid) {
        this.depts.splice(i,1);
        break;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
