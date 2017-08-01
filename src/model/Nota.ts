import { Materia } from './Materia';
import { Semestre } from './Semestre';

export class Nota{
    valorNota: number;
    materia: Materia = new Materia();
    semestre: Semestre = new Semestre();
}