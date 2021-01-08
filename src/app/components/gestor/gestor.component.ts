import { Component, OnInit } from '@angular/core';
import { GestorService } from '../../services/gestor.service';
import { NgForm } from '@angular/forms';
import { Gestor } from '../../models/gestor';


@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {

  gestores: Gestor[] = [];

  constructor(private gestorService: GestorService) { }

  ngOnInit(): void {
  	this.getGestores();
  }

  // Display full list of Gestores
  getGestores() {
  	this.gestorService.getGestores().subscribe(
  		res => {
  			this.gestores = res;
  		},
  		err => console.log(err)
  	)
  }
  
  // Delete one Gestor 
  deleteGestor(id: string) {
  	if( confirm('Are you sure that you want to delete this gestor?') ){
      this.gestorService.deleteGestor(id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    this.getGestores();  
    }
  }

}
