import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-reactive-final',
  templateUrl: './reactive-final.component.html',
  styleUrls: ['./reactive-final.component.css']
})
export class ReactiveFinalComponent implements OnInit {
  statusPro = ['Stable', 'Critical', 'Finished']
  projectForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'projectEmail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    })
  }

  onSubmit() {
    console.log(this.projectForm)
  }

  customProjectNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>( (resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'Test') {
          resolve({'projectNameInvalid': true})
        }
        else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

}
