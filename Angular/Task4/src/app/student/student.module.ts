import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    StudentListComponent,
    StudentAddComponent,
    StudentDetailsComponent
  ]
})
export class StudentModule { }
