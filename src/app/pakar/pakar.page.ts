import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../app/auth-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pakar',
  templateUrl: './pakar.page.html',
  styleUrls: ['./pakar.page.scss'],
})
export class PakarPage implements OnInit {

  ResponseData:any;
  DataPakar:any;
  constructor(public api: AuthServiceService,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.GetInformasiPenyakit();
  }

  async GetInformasiPenyakit() {   
    const loading = await this.loadingController.create({
      message: 'Memuat Data ...'
    });
    await loading.present();  
    await this.api.Get_Data('data_pakar')
      .subscribe(res => {
        this.ResponseData=res;
        if(this.ResponseData.data){
          this.DataPakar=this.ResponseData.data;
          loading.dismiss();
        }
        else{ 
          this.DataPakar='';
          loading.dismiss();
       }         
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
