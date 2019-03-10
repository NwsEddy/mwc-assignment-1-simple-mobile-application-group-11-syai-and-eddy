import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-appointment2',
  templateUrl: './appointment2.page.html',
  styleUrls: ['./appointment2.page.scss'],
})
export class Appointment2Page implements OnInit {

  constructor(public loadingController: LoadingController) 
  {}
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }


  ngOnInit() {
  }

}
