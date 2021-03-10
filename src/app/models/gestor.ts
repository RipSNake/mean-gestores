export interface Gestor {
	legajo: number
	name: string
	hourShift: string
	startHour: string
	endHour?: string // Should be auto calculated
	position: string
	phone: number
	notes?: [{date: Date, note: string}]
	createdAt?: Date
	updatedAt?: Date
	_id: string
}