import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../app/auth-service.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  ResponseData:any;
  Data_Cabang:any;
  constructor(public api: AuthServiceService,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.GetDataCabang();
  }

  async GetDataCabang() {   
    const loading = await this.loadingController.create({
      message: 'Memuat Data ...'
    });
    await loading.present();  
    await this.api.Get_Data('cabang_klinik')
      .subscribe(res => {
        this.ResponseData=res;
        if(this.ResponseData.data){
          this.Data_Cabang=this.ResponseData.data;
          loading.dismiss();
        }
        else{ 
          this.Data_Cabang='';
          loading.dismiss();
       }         
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
