import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormsTdAssignmentComponent } from './forms-td-assignment/forms-td-assignment.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { ReactiveFinalComponent } from './reactive-final/reactive-final.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsTdAssignmentComponent,
    FormsReactiveComponent,
    ReactiveFinalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
