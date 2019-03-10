import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'about-us2', loadChildren: './about-us2/about-us2.module#ABoutUs2PageModule' },
  { path: 'cst', loadChildren: './cst/cst.module#CSTPageModule' },
  { path: 'medicine', loadChildren: './medicine/medicine.module#MedicinePageModule' },
  { path: 'medicine2', loadChildren: './medicine2/medicine2.module#Medicine2PageModule' },
  { path: 'appointment2', loadChildren: './appointment2/appointment2.module#Appointment2PageModule' },  { path: 'done', loadChildren: './done/done.module#DonePageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
