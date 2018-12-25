import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
import { error } from 'util';
import { Observable } from 'rxjs';

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
  userObject: any = {};

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  onSubmit(loginForm) {

    if (loginForm.valid) {
      debugger
      this.loginService.CheckUserLogin(this.userObject).subscribe(
        (data: any) => {
          console.log(data);
        }, error => {
          console.log(error);
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
