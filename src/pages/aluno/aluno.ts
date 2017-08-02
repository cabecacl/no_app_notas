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
  
    // let aluno = new Aluno;
    // aluno.nome = "Luciano Andrade da Silva";
    // aluno.dataNascimento = 15;
    // aluno.turma = new Turma();
    // aluno.turma.nome = "9º Ano"; 
    // aluno.numeroMatricula = 44555; 
    // aluno.turno = "Manhã";
    // aluno.diaNascimento = "28/09/2002"; 
    // aluno.numResidencial = "1111-4444"; 
    // aluno.numCelular = "(81)92222-5555"; 

    this.aluno = navParams.get('aluno');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoPage');
  }

}
