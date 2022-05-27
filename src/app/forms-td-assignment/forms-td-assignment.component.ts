import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-td-assignment',
  templateUrl: './forms-td-assignment.component.html',
  styleUrls: ['./forms-td-assignment.component.css']
})
export class FormsTdAssignmentComponent implements OnInit {

  @ViewChild('nf') newForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.newForm.value);
  }

}
