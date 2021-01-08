import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GestorService } from '../../services/gestor.service';
import { Gestor } from '../../models/gestor';

@Component({
  selector: 'app-presentismo',
  templateUrl: './presentismo.component.html',
  styleUrls: ['./presentismo.component.css']
})
export class PresentismoComponent implements OnInit {

  date: Date = new Date();
  gestores: Gestor[] = [];

  constructor(
  	private gestorService: GestorService,
  	private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  	this.getDate();
  	this.getGestores();
  }

  // Get all the gestores working in the enterprise
  getGestores(): void {
  	this.gestorService.getGestores().subscribe(
  		res => this.gestores = res
  	)
  }

  // To automatically see the assistance registry of the current day
  getDate(): void {
  	this.date = new Date();
  }

  setDate(date: Date): void {
    this.date = date;
  }

  //
  setPresente(id: string, value: boolean): void {
    alert('Hola setPresente');
    console.log('Set presente for id: ',id,value);
  }

}
