import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const SERVER = 'http://localhost:8000/api/';

export class LoginAccount {

  public id: string;
  public token: string;

  constructor(
    public username: string,
    public password: string,
    public role = '2',
    public active = 1
  ){}

}

export class SubscribeAccount  {

  public id: string;
  public token: string;

  constructor(
      public username: string,
      public email: string,
      public firstName: string,
      public lastName: string,
      public birthday: string,
      public phone: string,
      public address: string,
      public city: string,
      public photo: string,
      public password: string,
      public role = '2',
      public active = 1
    ) {}

}

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(
    private http: HttpClient
  ) { }

  postLogin(account) {
    return this.http.post<LoginAccount>(SERVER + 'login', account);
  }

  postSubscribe(account) {
    return this.http.post<SubscribeAccount>(SERVER + 'subscribe', account);
  }

}