import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: string;
  senha: string;

  constructor(public navCtrl: NavController) {

  }
  login() {
    // this.navCtrl.push(LoginPage);
    console.log("========== login ===========");
  }

  signup() {
    // this.navCtrl.push(SignupPage);
    console.log("========== signup ===========");
  }
}
