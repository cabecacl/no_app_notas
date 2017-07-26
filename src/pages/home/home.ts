import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlunoPage } from '../aluno/aluno';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: string;
  senha: string;

  constructor(public navCtrl: NavController) {

  }
  logar() {
    if(this.usuario.toUpperCase() == 'CNO' && this.senha.toUpperCase() == 'CNO'){
      this.navCtrl.push(AlunoPage);
    }
  }

  signup() {
    // this.navCtrl.push(SignupPage);
    console.log("========== signup ===========");
  }
}
