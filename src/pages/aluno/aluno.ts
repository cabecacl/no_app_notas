import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../model/Aluno';
import { Turma } from '../../model/Turma';

/**
 * Generated class for the AlunoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html',
})
export class AlunoPage {

  aluno: Aluno;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    let aluno = new Aluno;
    aluno.nome = "Luciano Andrade da Silva";
    aluno.dataNascimento = new Date();
    aluno.turma = new Turma();
    aluno.turma.nome = "5 A Terde";

    this.aluno = aluno;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoPage');
  }

}
