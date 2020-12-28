import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';

import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {  
  navigate: any;  
  constructor(   
    private platform: Platform,  
    private splashScreen: SplashScreen,  
    private statusBar: StatusBar,
    private AuthServiceService: AuthServiceService,
    public loadingController: LoadingController,
    private navCtrl: NavController
  ) {   
    this.sideMenu();  
    this.initializeApp();  
  }  
  initializeApp() {  
      this.platform.ready().then(() => {  
      this.statusBar.styleDefault();   
      this.splashScreen.hide();  
      this.Auth();
    });  
  }

  showBtnLogin: boolean = true;
  currentUser: any;
  Username:any;

  ngOnInit() { 
    this.AuthServiceService.authenticationState.subscribe((res: any) => {
      let dataStorage=JSON.parse(localStorage.getItem(this.AuthServiceService.TOKEN_KEY));
    });
  }


  // Render Menu Dinamis
  sideMenu() {  
    this.navigate =   
    [  
      { 
        title : 'Beranda',
        url   : '/home',
        icon  : 'home',
        status: true
      },
      { 
        title : 'Informasi',
        url   : '/informasi',
        icon  : 'information-circle-outline',
        status: true
      },
      { 
        title : 'Pendaftaran',  
        url   : '/pendaftaran',  
        icon  : 'create',
        status: true
      },   
      {  
        title : 'Konsultasi',  
        url   : '/login',  
        icon  : 'chatbubbles',
        status: true  
      },
      {  
        title : 'Konsultasi',  
        url   : '/konsultasi',  
        icon  : 'chatbubbles',
        status: false  
      },  
      {  
        title : 'About',  
        url   : '/about',  
        icon  : 'book',
        status: true
      },   
      {
        title : 'Contact Us',
        url   : '/contact-us',
        icon  : 'person',
        status: true
      },
      {
        title : 'Pakar',
        url   : '/pakar',
        icon  : 'people',
        status: true
      },
    ];  
  }
  // Render Menu Dinamis

  // Authentikasi Sesi Login Menggunakan JWT
  Auth(){
    this.AuthServiceService.authenticationState.subscribe((data) => {
      if (data==true) {
          this.navCtrl.navigateRoot(['konsultasi']);
          // ini buat replace after login page login jadi konsultasi
          for (let i = 0; i < this.navigate.length; i++) {
            if (this.navigate[i].url == '/login') {
              this.navigate[i].status = false;
            }
            if (this.navigate[i].url == '/konsultasi') {
              this.navigate[i].status = true;
            }
          }
          // ini buat replace after login page login jadi konsultasi
          this.showBtnLogin = false;
        } else {
          this.navCtrl.navigateRoot(['login']);
        }
   });
  }
  // Authentikasi Sesi Login Menggunakan JWT

  async logout(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present(); 
    localStorage.clear();
    this.AuthServiceService.logout();
    loading.dismiss();

    // ini buat replace after login page login jadi konsultasi
    for (let i = 0; i < this.navigate.length; i++) {
      if (this.navigate[i].url == '/konsultasi') {
        this.navigate[i].status = false;
      }
      if (this.navigate[i].url == '/login') {
        this.navigate[i].status = true;
      }
    }
    // ini buat replace after login page login jadi konsultasi
    
    // menyembunyikan button login
    this.showBtnLogin = true;
  }

}
