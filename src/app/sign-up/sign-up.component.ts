import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  myForm: FormGroup;
  months = [
    { value: 'jan', viewValue: 'Jan' },
    { value: 'feb', viewValue: 'Feb' },
    { value: 'mar', viewValue: 'March' },
    { value: 'Apr', viewValue: 'April' },
    { value: 'may', viewValue: 'May' },
    { value: 'june', viewValue: 'June' },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      gender: ['', [Validators.required]],
      agree: [false, [Validators.requiredTrue]],
      date: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      password1: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
      password2: [
        '',
        [
          Validators.required,
          this.passwordValidity,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
    });

    // this.myForm.valueChanges.subscribe(console.log);
  }
  passwordValidity(control) {
    if (control.value != null) {
      var confirm = control.value;
      var pass = control.root.get('password1');
      if (pass) {
        var pswrd = pass.value;
        if (confirm != '' && pswrd != '') {
          if (confirm != pswrd) {
            return { passwordValidity: true };
          } else {
            return null;
          }
        }
      }
    }
  }
  get name() {
    return this.myForm.get('name');
  }
  get email() {
    return this.myForm.get('email');
  }
  get address() {
    return this.myForm.get('address');
  }
  get phone() {
    return this.myForm.get('phone');
  }
  get gender() {
    return this.myForm.get('gender');
  }
  get eligiable() {
    return this.myForm.get('agree');
  }
  get date() {
    return this.myForm.get('date');
  }
  get year() {
    return this.myForm.get('year');
  }
  get month() {
    return this.myForm.get('month');
  }
  get password1() {
    return this.myForm.get('password1');
  }
  get password2() {
    return this.myForm.get('password2');
  }
  displayData() {
    console.log(this.myForm.value);
  }
}
