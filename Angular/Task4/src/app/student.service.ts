import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private stds:Student[]=[
    new Student(10,"ahmed",35,3),

  ];

  getAllStudents(){
    return this.stds;
  }

  addStudent(std:Student){
    this.stds.push(new Student(std.id,std.name,std.age,std.deptno));
  }

  getStudent(id:number){
    for (let i = 0; i < this.stds.length; i++) {
        if(this.stds[i].id==id){
          return this.stds[i];
        }      
    }
    return null;
  }

  constructor() { }
}
