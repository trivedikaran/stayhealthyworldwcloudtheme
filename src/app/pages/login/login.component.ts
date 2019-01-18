import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
import { error, isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';
import { areIterablesEqual } from '@angular/core/src/change_detection/change_detection_util';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { NotifierService } from 'angular-notifier';


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
  userObject: any = {};
  days: any[];
  months: any[];
  years: any[];
  registrationObject: any = {};
  private readonly notifier: NotifierService;

  constructor(fb: FormBuilder, private loginService: LoginService, private router: Router,
    notifierService: NotifierService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.notifier = notifierService;
  }

  onSubmit(loginForm) {
    if (loginForm.valid) {
      this.loginService.CheckUserLogin(this.userObject).subscribe(
        (data: any) => {
          const userDetail = data.recordsets[0];
          if (!isNullOrUndefined(userDetail) && userDetail.length > 0) {
            this.router.navigate(['/pages/fitnesswall']);
          } else {
            alert('Invalid user login...');
          }
        }, error => {
          console.log(error);
        });
    }
  }

  ngOnInit() {
    this.notifier.notify('success', 'Registration has been completed successfully. Welcome to the stay healthy world');
    this.GetDayList();
    this.GetMonthList();
    this.GetYearList();
  }


  GetDayList() {
    this.loginService.GetDayList().subscribe(
      (data: any) => {
        this.days = data.recordsets[0];
      }, error => {
        console.log(error);
      });
  }

  GetMonthList() {
    this.loginService.GetMonthList().subscribe(
      (data: any) => {
        this.months = data.recordsets[0];
      }, error => {
        console.log(error);
      });
  }

  GetYearList() {
    this.loginService.GetYearList().subscribe(
      (data: any) => {
        this.years = data.recordsets[0];
      }, error => {
        console.log(error);
      });
  }

  onRegistration(registrationForm) {
    if (registrationForm.valid) {
      this.loginService.RegisterUser(this.registrationObject).subscribe(
        (data: any) => {
          debugger
          const userDetail = data.recordsets[0];
          if (!isNullOrUndefined(userDetail) && userDetail.length > 0) {
            this.notifier.notify('success', 'Registration has been completed successfully. Welcome to the stay healthy world');
          } else {
            alert('Invalid user login...');
          }
        }, error => {
          console.log(error);
        });
    }
  }

}
