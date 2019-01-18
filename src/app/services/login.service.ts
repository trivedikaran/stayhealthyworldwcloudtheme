import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { parse } from 'url';

const url = 'http://localhost:8080/Login/';


@Injectable()
export class LoginService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
  }

  GetUser(userId) {
    const getUserUrl = url + 'GetUserList?UserId=' + userId;
    return this.http.get(getUserUrl).map((res: Response) => res.json());
  }

  CheckUserLogin(userObject) {
    const checkUserLoginUrl = url + 'CheckUserLogin';
    return this.http.post(checkUserLoginUrl, userObject).map((res: Response) => res.json());
  }

  GetDayList() {
    const getDayUrl = url + 'GetDayList';
    return this.http.get(getDayUrl).map((res: Response) => res.json());
  }

  GetMonthList() {
    const getMonthUrl = url + 'GetMonthList';
    return this.http.get(getMonthUrl).map((res: Response) => res.json());
  }

  GetYearList() {
    const getYearUrl = url + 'GetYearList';
    return this.http.get(getYearUrl).map((res: Response) => res.json());
  }

  RegisterUser(registerUserObject) {
    const registerUserUrl = url + 'RegisterUser';
    return this.http.post(registerUserUrl, registerUserObject).map((res: Response) => res.json());
  }

}
