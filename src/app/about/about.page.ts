import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  
  constructor(private toastererx: ToastController) { }

  ngOnInit() {
  //  console.log("I've started");
  //this.anything()
  }
anything(userValue){
  this.showToast(userValue);
}

async showToast(msg) {
  const toast = await this.toastererx.create({
    message: msg,
    duration: 2000
});
toast.present();
}

}
