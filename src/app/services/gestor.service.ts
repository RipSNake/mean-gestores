import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gestor } from '../models/gestor';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  constructor(private http: HttpClient) { 

  }

  URL_API = 'http://localhost:4000/api/gestores';

  gestores: Gestor[] = [];

  selectedGestor: Gestor = {
  	legajo: 0,
  	name: '',
  	hourShift: '',
  	startHour: '',
  	endHour: '',
  	position: '',
  	phone: 0,
  	notes: undefined,
  	updatedAt: undefined,
    _id: ''
  }

  getGestores() {
  	return this.http.get<Gestor[]>(this.URL_API);
  }

  createGestor(gestor: Gestor) {
  	return this.http.post(this.URL_API, gestor);
  }

  getGestor(id: string) {
  	return this.http.get<Gestor>(this.URL_API + '/' + id);
  }

  editGestor(gestor: Gestor) {
  	return this.http.put(this.URL_API + '/' + gestor._id, gestor);
  }

  seeDetails(gestor: Gestor) {
  	return () => {
      console.log('See Details Function');
    };
  }
  
  deleteGestor(id: string) {
    return this.http.delete(this.URL_API + '/' + id);
  }

  // Return gestores matching the string used to search
  // angular filter: $filter('filter')(array, expression, comparator, anyPropertyKey)
  searchGestor(term: string) {
    // custom search function that returns and array of gestores
    console.log('This actually has to be a filter');
  }
}
