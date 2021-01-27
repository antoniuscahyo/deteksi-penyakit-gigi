import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, timeout } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Platform, ToastController } from '@ionic/angular';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://diagnosapenyakitgigi.desyartasari.com/APIService";
const apiUrlAuthLogin = "http://diagnosapenyakitgigi.desyartasari.com/SlimRestJWT/public";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  DataLogin:any;
  DataCheckLogin:any;
  authenticationState = new ReplaySubject();
  token:any;


  API_URL = apiUrlAuthLogin; 
  
  TOKEN_KEY = 'token';

  constructor(
    private http: HttpClient,
    private platform: Platform,
    public toastController: ToastController
    ) {
      this.platform.ready().then(() => {
        this.checkToken();
      });
    }

  Get_Data(type): Observable<any> {
    return this.http.get(`${apiUrl}/${type}`);
  }

  Get_Data_Post(credentials,type) {
    return this.http.post(`${apiUrl}/${type}`,credentials);
  }

  Post_Data(type,credentials): Observable<any>{
    return this.http.post(`${apiUrl}/${type}`,credentials,httpOptions);
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

  // Start Login Logout Services

  //ika token tidak ada maka authenticationState=false
  //jika token ada maka akan memanggil fungsi cekUser 
  checkToken() {
    console.log('Fungsi CekToken Jalan');
    if(localStorage.getItem(this.TOKEN_KEY)==null || localStorage.getItem(this.TOKEN_KEY)=='') {
      this.authenticationState.next(false);     
    }else{
      this.CekUser().subscribe(data => {
        this.DataCheckLogin=data;
        if(this.DataCheckLogin.status=="success"){
          this.authenticationState.next(true);
          console.log('Cek Token True');          
        }else{
          this.authenticationState.next(false);
          console.log('Cek TOken False');
        }
     },
     err => {
        this.authenticationState.next(false);
      });
    }                                                                                                      
  }

  //cek user di sisi server dengan headers authorize bearer
  //teman-teman dapat membuat fungsi baru untuk request data lainnya dengan header authorize bearer
  CekUser(){
    //ambil data dari localstorage
    console.log('Fungsi CekUser Jalan');
    let dataStorage=JSON.parse(localStorage.getItem(this.TOKEN_KEY));
     this.token=dataStorage.token;    
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.token
      });   
    return this.http.get(this.API_URL + '/api/user/'+dataStorage.data.IdUser, { headers: headers }).pipe(
      timeout(8000),
      tap(Data => {
        return Data;
      })
    );
  }

  //login
  loginApi(credentials, type){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.API_URL +'/'+ type, credentials, { headers: headers }).pipe(
      tap(Data => {
        this.DataLogin=Data;
        if(this.DataLogin.status=="success"){
          localStorage.setItem(this.TOKEN_KEY, JSON.stringify(Data));
          this.authenticationState.next(true);
        }else{
          this.authenticationState.next(false);
          this.presentToast(this.DataLogin.informasi);
        }
        return Data;
      })
    );
  }

  //logout
  logout() {
    this.authenticationState.next(false);
  }
  // End Login Logout Services

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

}
