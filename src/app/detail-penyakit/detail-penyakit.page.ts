import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';

@Component({
  selector: 'app-detail-penyakit',
  templateUrl: './detail-penyakit.page.html',
  styleUrls: ['./detail-penyakit.page.scss'],
})
export class DetailPenyakitPage implements OnInit {

  data:any;
  ResponseData:any;
  DetailPenyakit:any;
  constructor(
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    public api: AuthServiceService
  ) {

    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.data = JSON.parse(params.id);
      }
    });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let postdata = new FormData;
    postdata.append('id', this.data);
    this.GetDetailPenyakit(postdata);
  }

  async GetDetailPenyakit(data) {   
    const loading = await this.loadingController.create({
      message: 'Memuat Data ...'
    });
    await loading.present();  
    await this.api.Get_Data_Post(data,'detail_penyakit')
      .subscribe(res => {
        this.ResponseData=res;
        if(this.ResponseData.data){
          this.DetailPenyakit=this.ResponseData.data;
          loading.dismiss();
        }
        else{ 
          this.DetailPenyakit='';
          loading.dismiss();
       }         
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
