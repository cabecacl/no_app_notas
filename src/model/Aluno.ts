import { Turma } from './Turma';
import { Nota } from './Nota';

export class Aluno{
    nome: string;
    dataNascimento: string;
    numeroMatricula: string; 
    turno: string;
    numCelular: string; 
    foto: string;

    turma: Turma = new Turma();

    notas: Nota[] = new Array<Nota>();
}