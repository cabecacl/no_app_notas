import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Aluno } from '../../model/Aluno';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the NotasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {

  aluno: Aluno = new Aluno();

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
    this.storage.get('aluno')
      .then(aluno => {
        this.aluno = aluno;
        console.log(this.aluno);
      }, error => console.log(error));
  }

}
