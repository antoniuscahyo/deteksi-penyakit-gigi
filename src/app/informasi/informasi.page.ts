import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../app/auth-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-informasi',
  templateUrl: './informasi.page.html',
  styleUrls: ['./informasi.page.scss'],
})
export class InformasiPage implements OnInit {

  ResponseData:any;
  Informasi_Penyakit:any;
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
    await this.api.Get_Data('informasi_penyakit')
      .subscribe(res => {
        this.ResponseData=res;
        if(this.ResponseData.data){
          this.Informasi_Penyakit=this.ResponseData.data;
          loading.dismiss();
        }
        else{ 
          this.Informasi_Penyakit='';
          loading.dismiss();
       }         
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
