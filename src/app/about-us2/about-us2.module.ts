import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { IonicModule } from '@ionic/angular';

import { ABoutUs2Page } from './about-us2.page';
// import {IonicImageViewerModule} from 'ionic-img-viewer';



const routes: Routes = [
  {
    path: '',
    component: ABoutUs2Page
  }
];

@NgModule({

  



  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // PhotoViewer
    RouterModule.forChild(routes)
    
    // IonicImageViewerModule
    
    
    
  ],
  declarations: [ABoutUs2Page]
})
export class ABoutUs2PageModule {}
