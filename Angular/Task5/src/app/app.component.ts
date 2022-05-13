import { Component } from '@angular/core';
import { DepartmentService } from './department.service';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[DepartmentService,StudentService]
})
export class AppComponent {
  title = 'Task5';
}
