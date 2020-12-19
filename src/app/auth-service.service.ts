import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, timeout } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Platform, ToastController } from '@ionic/angular';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://desyartasari.com/APIService";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  DataLogin:any;
  DataCheckLogin:any;
  authenticationState = new ReplaySubject();
  token:any;

  constructor(private http: HttpClient) { }

  Get_Data(type): Observable<any> {
    return this.http.get(`${apiUrl}/${type}`);
  }

  Post_Data(type,credentials): Observable<any>{
    return this.http.post(`${apiUrl}/${type}`,credentials,httpOptions);
  }

  loginApi(credentials,type): Observable<any> {
    return this.http.get(`${apiUrl}/${type}`);
  }

  //register
  RegisterApi(credentials, type){    
    return this.http.get(`${apiUrl}/${type}`);
  }

  //logout
  logout() {
    this.authenticationState.next(false);
  }

}
