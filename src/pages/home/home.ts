import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlunoPage } from '../aluno/aluno';

import { Aluno } from '../../model/Aluno';
import { Materia } from '../../model/Materia';
import { Nota } from '../../model/Nota';
import { Turma } from '../../model/Turma';
import { Semestre } from '../../model/Semestre';
import { AlunoNotaSemestre } from '../../model/AlunoNotaSemestre';

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

  criarAluno(login: string){

    let aluno1 = new Aluno();
    let aluno2 = new Aluno();

    aluno1.nome = "Luciano Andrade dos Santos";
    aluno1.dataNascimento = 10;
    aluno1.diaNascimento = "12";
    aluno1.numeroMatricula = 198712101111;
    aluno1.numResidencial = "123";
    aluno1.turno = "Manhã";

    aluno2.nome = "Thiago Hercules de Aguiar";
    aluno2.dataNascimento = 09;
    aluno2.diaNascimento = "07";
    aluno2.numeroMatricula = 1999112233;
    aluno2.numResidencial = "753";
    aluno2.turno = "Tarde";

    let turma1 = new Turma();
    let turma2 = new Turma();

    turma1.nome = "8A - Manhã";
    turma2.nome = "7B - Tarde";

    aluno1.turma = turma1;
    aluno2.turma = turma2;

    let semestre1 = new Semestre();
    let semestre2 = new Semestre();

    semestre1.nome = "1º Semestre Manhã";
    semestre2.nome = "1º Semestre Tarde";

    

    let nota1 = new Nota();
    let nota2 = new Nota();
    let nota3 = new Nota();
    let nota4 = new Nota();
    let nota5 = new Nota();
    let nota6 = new Nota();
    
    

  }
}
