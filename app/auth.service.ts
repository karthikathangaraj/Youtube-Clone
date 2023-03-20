import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    public username: string="";
    public password: string="";

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.get(environment.production + `/api/v1/login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }
  /*tslint:disable:no-unused-variable*/
  registerSuccessfulLogin(username: string, password: string) {
   // save the username to session
  }
}