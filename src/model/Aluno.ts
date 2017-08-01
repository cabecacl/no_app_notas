import { Turma } from './Turma';
import { Nota } from './Nota';

export class Aluno{
    nome: string;
    dataNascimento: number;
    turma: Turma;
    numeroMatricula: number; 
    turno: string;
    diaNascimento: string; 
    numCelular: string; 
    numResidencial: string;

    notas: Nota[] = new Array<Nota>();
}