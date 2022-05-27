import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signUpFormNew: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];


  constructor() { }

  ngOnInit(): void {
    this.signUpFormNew = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmail),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
    // this.signUpFormNew.statusChanges.subscribe(
    //   (value) => {
    //     console.log(value)
    //   }
    // )
    // this.signUpFormNew.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value)
    //   }
    // )

    // this.signUpFormNew.setValue({
    //   'userData': {
    //     'username': 'Tom',
    //     'email': 'tom@tom.com'
    //   },
    //   'gender': 'female',
    //   'hobbies': []
    // })
  }

  onSubmit() {
    console.log(this.signUpFormNew)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpFormNew.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signUpFormNew.get('hobbies')).controls;
  }


  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if (this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
    return null
  }


  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true})
        }
        else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
