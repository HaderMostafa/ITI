import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StuentComponent } from './Student/student.component';
import { DepartmentComponent } from './department/department.component';
import { RedtieHeaderComponent } from './redtie-header/redtie-header.component';
import { RedtieFooterComponent } from './redtie-footer/redtie-footer.component';
import { RedtieSidebarComponent } from './redtie-sidebar/redtie-sidebar.component';
import { RedtieContentComponent } from './redtie-content/redtie-content.component';


@NgModule({
  declarations: [
    AppComponent,StuentComponent, DepartmentComponent, RedtieHeaderComponent, RedtieFooterComponent, RedtieSidebarComponent, RedtieContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
