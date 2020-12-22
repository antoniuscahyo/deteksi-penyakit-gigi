import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, LoadingController, ToastController, Platform, ModalController, AlertController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';


@Component({
  selector: 'app-pendaftaran',
  templateUrl: './pendaftaran.page.html',
  styleUrls: ['./pendaftaran.page.scss'],
})
export class PendaftaranPage implements OnInit {

  showPasswordText:any;
  showKonfirmPasswordText:any;

  validations = {
    'Username': [
      { type: 'required', message: 'Username harus diisi.' },
      { type: 'validUsername', message: 'Username sudah terdaftar.' }
    ],
    'Password': [
      { type: 'required', message: 'Password harus diisi.' },
      { type: 'minlength', message: 'Password minimal harus 5 karakter.' },
      { type: 'pattern', message: 'Password harus mengandung huruf (baik huruf besar dan kecil) dan angka.' },
    ],  
    'NamaLengkap': [
      { type: 'required', message: 'Nama lengkap harus diisi.' },      
    ],   
    'Email': [
      { type: 'required', message: 'Email harus diisi.' },
      { type: 'pattern', message: 'Email tidak valid.' },
    ],
    'NoHp': [
      { type: 'required', message: 'No Hp harus diisi.' },
      { type: 'minlength', message: 'No Hp minimal harus 10 karakter.' },
      { type: 'maxlength', message: 'No Hp maksimal harus 15 karakter.' },
    ],
  };

  FormRegister: FormGroup;
  ResponseRegister:any;
  Email;
  Username;

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController, 
    public loadingController: LoadingController,
    private platform: Platform,
    public toastController: ToastController,
    public alertController: AlertController,
    public modalController: ModalController,
    private serviceService: AuthServiceService
  ) { }

  ngOnInit() {
    this.FormRegister = this.formBuilder.group({
      Username:new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Password:new FormControl('', Validators.compose([
        Validators.required, 
        Validators.minLength(5),
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      NamaLengkap:new FormControl('', Validators.compose([Validators.required])),
      Email:new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[\\w]+(?:\\.[\\w])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$')
      ])),
      NoHp:new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10), 
        Validators.maxLength(15) 
      ])),
      JenisKelamin:new FormControl('', Validators.compose([Validators.required])),
      TempatLahir:new FormControl('', Validators.compose([Validators.required])),
      TanggalLahir:new FormControl('', Validators.compose([Validators.required])),
      Pekerjaan:new FormControl('', Validators.compose([Validators.required])),
      Alamat:new FormControl('', Validators.compose([Validators.required]))
    });
  }

  async Register(){
    //menampilkan loading
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present(); 
    //panggil fungsi register di service
    this.serviceService.RegisterApi(this.FormRegister.value,'pendaftaran').subscribe(
      data => {
        this.ResponseRegister=data;
        //cek apakah register berhasil atau tidak
        if(this.ResponseRegister.status=="success"){    
          loading.dismiss();
          this.presentToast("Pendaftaran berhasil.");
        }else{
          this.AlertRegister("Pendaftaran user tidak berhasil, silahkan coba lagi.");       
          loading.dismiss();
          // this.modalController.dismiss();
        }
        loading.dismiss();
      },
      error => {
        loading.dismiss();
        this.AlertRegister("Sedang Perbaikan.");
      }
    );
  }

  dismissRegister() {
    this.modalController.dismiss();
  }

  async AlertRegister(Message) {
    const alert = await this.alertController.create({
      header: 'Peringatan!',
      //subHeader: 'Subtitle',
      message: Message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

}
