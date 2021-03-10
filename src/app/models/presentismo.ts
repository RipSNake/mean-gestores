import { GestorPresentismo } from './gestorPresentismo';

export interface Presentismo {
	_id?: string
	updatedAt?: Date
	date: Date // La fecha del dia para el que computa el presentismo
	gestores: GestorPresentismo[] // se contendran solo los _id de los gestores
}