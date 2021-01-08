export interface Gestor {
	legajo: number
	name: string
	hourShift: string
	startHour: string
	endHour?: string
	position: string
	phone: number
	notes?: []
	createdAt?: string
	updatedAt?: string
	_id?: string
}