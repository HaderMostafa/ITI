import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  std:Student=new Student (0,"",0,0);

  nstd:Student=new Student (0,"",0,0);

  stds:Student[]=[
    new Student (1,"ayman",28,1),
    new Student(2,"ahmed",25,1),
    new Student(3,"omar",23,3),
    new Student(4,"ola",27,2)
  ]

  add(){
    this.stds.push(new Student(this.nstd.id,this.nstd.name,this.nstd.age,this.nstd.deptno));
  
    this.nstd.id=0;
    this.nstd.name="";
    this.nstd.age=0;
    this.nstd.deptno=0;
  }

  show(stdid:number){
    for (let i = 0; i < this.stds.length; i++) {
      if (this.stds[i].id==stdid) {
        this.std=this.stds[i];
        break;
      }
    }
  }

  edit(stdid:number){
    for (let i = 0; i < this.stds.length; i++) {
      if (this.stds[i].id==stdid) {
        
        this.stds[i].id=this.nstd.id;
        this.stds[i].name=this.nstd.name;
        this.stds[i].age=this.nstd.age;
        this.stds[i].deptno=this.nstd.deptno;

        this.nstd.id=0;
        this.nstd.name="";
        this.nstd.age=0;
        this.nstd.deptno=0;

        break;
      }
    }
  }

  delete(stdid:number){
    for (let i = 0; i < this.stds.length; i++) {
      if (this.stds[i].id==stdid) {
        this.stds.splice(i,1);
        break;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
