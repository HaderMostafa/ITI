import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'primeng/rating';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StringConvertPipe,
    ArraySplicePipe
  ],
  imports: [
    BrowserModule,SharedModule,RatingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
