import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.page.html',
  styleUrls: ['./medicine.page.scss'],
})
export class MedicinePage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Oops!',
      subHeader: 'Sorry',
      message: 'This service is unavailable at this moment.',
      buttons: ['OK']
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
// function mtotal()
// 		{
// 			document.getElementById('meowtotal').value=document.getElementById('meowharga').innerHTML*document.getElementById('meowqty').value;
//     }
//     function ctotal()
// 		{
// 			document.getElementById('chairtotal').value=document.getElementById('chairharga').innerHTML*document.getElementById('chairqty').value;
// 		}
// function ftotal()
// 		{
// 			document.getElementById('finaltotal').value= parseFloat(document.getElementsByClassName('medicine C').value)+ parseFloat(document.getElementsByClassName('medicine D').value);
// 		}
// function ctotal()
// {
//   document.getElementById('medicineC').innerHTML+19
// }


