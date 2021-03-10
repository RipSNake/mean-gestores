import { Gestor } from './gestor';

export interface GestorPresentismo extends Gestor {
	presente: boolean
	fallas: [{falla: string, notas: string}]
	cubreA: [{legajo: number, name: string}]
};