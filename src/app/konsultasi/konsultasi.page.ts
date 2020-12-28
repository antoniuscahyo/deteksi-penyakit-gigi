import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-konsultasi',
  templateUrl: './konsultasi.page.html',
  styleUrls: ['./konsultasi.page.scss'],
})
export class KonsultasiPage implements OnInit {

  Username:any;
  showBtnLogin: boolean = true;
  constructor(
    public loadingController: LoadingController,
    private AuthServiceService: AuthServiceService
  ) {}

  ngOnInit() {
    //ambil data dari localstorage
    let dataStorage=JSON.parse(localStorage.getItem(this.AuthServiceService.TOKEN_KEY));
    this.Username=dataStorage.data.Username;
    // this.showBtnLogin = false;
  }

  async logout(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present(); 
    localStorage.clear();
    this.AuthServiceService.logout();
    loading.dismiss();
   }

}
