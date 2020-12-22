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
    let postdata = new FormData;
    postdata.append('nama_lengkap', credentials.NamaLengkap);
    postdata.append('email', credentials.Email);
    postdata.append('no_hp', credentials.NoHp);
    postdata.append('username', credentials.Username);
    postdata.append('password', credentials.Password);
    postdata.append('jenis_kelamin', credentials.JenisKelamin);
    postdata.append('tempat_lahir', credentials.TempatLahir);
    postdata.append('tanggal_lahir', credentials.TanggalLahir);
    postdata.append('pekerjaan', credentials.Pekerjaan);
    postdata.append('alamat', credentials.Alamat);

    return this.http.post(`${apiUrl}/${type}`,postdata);
  }

  //logout
  logout() {
    this.authenticationState.next(false);
  }

}
