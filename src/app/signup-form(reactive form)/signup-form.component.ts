import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signUpform = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpaces
    ],
    UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required),
    address: new FormGroup({
      streetAddress: new FormControl(''),
      city: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  // property to get the username field in the form
  // so that we can use it in html template for validation.
  get username() {
    return this.signUpform.get('username');
  }

  get streetAddress() {
    return this.signUpform.get('address.streetAddress');
  }

  login() {
    this.signUpform.setErrors({
      invalidLogin: true,
    });

    console.log(this.signUpform);
  }
}
