import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { parse } from 'url';

const url = 'http://localhost:8080/Login/';

@Injectable()
export class LoginService {
  constructor(private http: Http) {

  }

  GetUser(userId) {
    const currentUrl = url + 'GetUserList?UserId=10';
    return this.http.get(currentUrl).map((res: Response) => res.json());
  }

  CheckUserLogin(userObject) {
    debugger
  }

}
