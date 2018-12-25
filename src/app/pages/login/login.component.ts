import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
import { error } from 'util';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {

  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  submitted: boolean = false;
  userList: any;

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  onSubmit(userObject) {
    this.submitted = true;
    if (this.form.valid) {
      this.loginService.CheckUserLogin(userObject).subscribe(
        (data: any) => {
          debugger
        }, error => {
          
        });
    }
  }

  ngOnInit() {
    // this.loginService.GetUser(0).subscribe(
    //   (data: any) => {
    //     this.userList = data;
    //   }, error => {
    //   });
  }

}
