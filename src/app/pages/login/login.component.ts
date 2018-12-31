import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
import { error, isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';
import { areIterablesEqual } from '@angular/core/src/change_detection/change_detection_util';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


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
  // userList: any;
  userObject: any = {};

  constructor(fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  onSubmit(loginForm) {

    if (loginForm.valid) {
      this.loginService.CheckUserLogin(this.userObject).subscribe(
        (data: any) => {
          const userDetail = data.recordsets[0];
          if (!isNullOrUndefined(userDetail) && userDetail.length > 0) {
            this.router.navigate(['/pages/dashboard']);
          } else {
            alert('Invalid user login...');
          }

        }, error => {
          console.log(error);
        });
    }
  }

  ngOnInit() {
  }
}
