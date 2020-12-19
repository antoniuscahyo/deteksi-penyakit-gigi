import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { PendaftaranPage } from '../pendaftaran/pendaftaran.page';
import { AuthServiceService } from './../../app/auth-service.service';

@Component({
  selector: 'app-konsultasi',
  templateUrl: './konsultasi.page.html',
  styleUrls: ['./konsultasi.page.scss'],
})
export class KonsultasiPage implements OnInit {

  FormLogin:FormGroup;
  showPasswordText:any;
  dataLogin:any;

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController, 
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private serviceService: AuthServiceService,
  ) { }

  ngOnInit() {
    //setting form login
    this.FormLogin=this.formBuilder.group({
      Username:['',Validators.required],
      Password:['',Validators.required]
    });
  }

  //fungsi login
  async login(){
    //menampilkan loading
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present(); 
    //memanggil fungsi loginapi yang berada di service
    this.serviceService.loginApi(this.FormLogin.value,'login').subscribe(
      data => {
        this.dataLogin=data;
        if(this.dataLogin.status=="error"){
          let message='Nama pengguna dan kata sandi yang Anda masukkan tidak cocok. Silahkan periksa dan coba lagi.';
          this.presentToast(message);
        }
        loading.dismiss();
      },
      error => {
        let message='Tidak ada koneksi internet. Silakan periksa koneksi Anda.';
        this.presentToast(message);
        loading.dismiss();
      }
    );
  }

  //menampilkan halaman register
  async registerModal() {
    const modal = await this.modalController.create({
      component: PendaftaranPage
    });
    return await modal.present();
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position: "bottom"
    });
    toast.present();
  }

}
