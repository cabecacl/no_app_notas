import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlunoPage } from '../aluno/aluno';

import { Aluno } from '../../model/Aluno';
import { Materia } from '../../model/Materia';
import { Nota } from '../../model/Nota';
import { Turma } from '../../model/Turma';
import { Semestre } from '../../model/Semestre';
import { AlunoNotaSemestre } from '../../model/AlunoNotaSemestre';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: string;
  senha: string;

  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  logar() {
    this.navCtrl.setRoot(HomePage);
    if(this.usuario.toUpperCase() == 'CNO' && this.senha.toUpperCase() == 'CNO'){
      
      this.storage.set('aluno', this.criarAluno("CNO")).then(() => 
        this.navCtrl.push(AlunoPage, {aluno: this.criarAluno("CNO")}));
      
    
    }else if(this.usuario.toUpperCase() == 'CNO2' && this.senha.toUpperCase() == 'CNO2'){
      
      this.storage.set('aluno', this.criarAluno("CNO2")).then(() => 
        this.navCtrl.push(AlunoPage, {aluno: this.criarAluno("CNO2")}));
      
    }
  }

  signup() {
    // this.navCtrl.push(SignupPage);
    console.log("========== signup ===========");
  }

  criarAluno(login: string): Aluno{

    let aluno1 = new Aluno();
    let aluno2 = new Aluno();

    aluno1.nome = "Luciano Andrade dos Santos";
    aluno1.dataNascimento = new Date();
    aluno1.numeroMatricula = "MT12345";
    aluno1.turno = "Manhã";
    aluno1.numCelular = "81 98888 9999";

    aluno2.nome = "Thiago Hercules de Aguiar";
    aluno2.dataNascimento = new Date();
    aluno2.numeroMatricula = "MA54321";
    aluno2.turno = "Tarde";
    aluno2.numeroMatricula = "81 99999 7777";

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

    let materia1 = new Materia();
    materia1.nome = "Matematica";
    materia1.nomeProfessor = "Cleiton de Aguiar";
    let materia2 = new Materia();
    materia2.nome = "Português";
    materia2.nomeProfessor = "Carlos de Almeida Paes";
    let materia3 = new Materia();
    materia3.nome = "Quimica";
    materia3.nomeProfessor = "Lisanary Paes Barreto";
    let materia4 = new Materia();
    materia4.nome = "Fisica";
    materia4.nomeProfessor = "Cicero Ferreira Filho";

    let nota1 = new Nota();
    let nota2 = new Nota();
    let nota3 = new Nota();
    let nota4 = new Nota();
    let nota5 = new Nota();
    let nota6 = new Nota();
    let nota7 = new Nota();
    let nota8 = new Nota();
    
    nota1.materia = materia1;
    nota1.semestre = semestre1;
    nota1.valorNota = 10;
    
    nota2.materia = materia2;
    nota2.semestre = semestre1;
    nota2.valorNota = 8.3;

    nota3.materia = materia3;
    nota3.semestre = semestre1;
    nota3.valorNota = 5.5;

    nota4.materia = materia4;
    nota4.semestre = semestre1;
    nota4.valorNota = 6;

    nota5.materia = materia1;
    nota5.semestre = semestre1;
    nota5.valorNota = 7.4;
    
    nota6.materia = materia2;
    nota6.semestre = semestre1;
    nota6.valorNota = 6.1;

    nota7.materia = materia3;
    nota7.semestre = semestre1;
    nota7.valorNota = 9;

    nota8.materia = materia4;
    nota8.semestre = semestre1;
    nota8.valorNota = 2.3;

    aluno1.notas.push(nota1);
    aluno1.notas.push(nota2);
    aluno1.notas.push(nota3);
    aluno1.notas.push(nota4);

    aluno2.notas.push(nota5);
    aluno2.notas.push(nota6);
    aluno2.notas.push(nota7);
    aluno2.notas.push(nota8);

    if(login.toUpperCase() == 'CNO'){
      return aluno1;
    }else{
      return aluno2;
    }

  }
}
