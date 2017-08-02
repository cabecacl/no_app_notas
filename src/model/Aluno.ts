import { Turma } from './Turma';
import { Nota } from './Nota';

export class Aluno{
    nome: string;
    dataNascimento: Date;
    numeroMatricula: string; 
    turno: string;
    numCelular: string; 

    turma: Turma = new Turma();

    notas: Nota[] = new Array<Nota>();
}