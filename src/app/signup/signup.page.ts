import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router'

import{ AlertController } from '@ionic/angular'
import { headersToString } from 'selenium-webdriver/http';


@Component({
selector: 'app-signup',
templateUrl: './signup.page.html',
styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

username: string = ""
password: string = ""
cpassword: string = ""
email: string = ""
address: string = ""

constructor(
public afAuth: AngularFireAuth,
public alert: AlertController,
public router : Router
) { }

ngOnInit() {
}

async signup(){
const { username, password, cpassword, email, address} = this
if(password !== cpassword) {
this.showAlert("Error!", "Password don't match")
return console.error("Passwords don't match")
}

try{
const res = await this.afAuth.auth.createUserWithEmailAndPassword(username +'@gmail.com', password)
console.log(res)
this.showAlert("Success!", "Welcome to Furever Pawsitive!")
// this.router.navigate([/'home'])

} catch(error){
console.dir(error)
this.showAlert("Error", error.message)
}
}

async showAlert(header: string, message: string){
const alert = await this.alert.create({
header,
message,
buttons: ["OK"]
})
await alert.present()
}

}