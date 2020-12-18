import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pendaftaran',
    loadChildren: () => import('./pendaftaran/pendaftaran.module').then( m => m.PendaftaranPageModule)
  },
  {
    path: 'konsultasi',
    loadChildren: () => import('./konsultasi/konsultasi.module').then( m => m.KonsultasiPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'pakar',
    loadChildren: () => import('./pakar/pakar.module').then( m => m.PakarPageModule)
  },
  {
    path: 'informasi',
    loadChildren: () => import('./informasi/informasi.module').then( m => m.InformasiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
