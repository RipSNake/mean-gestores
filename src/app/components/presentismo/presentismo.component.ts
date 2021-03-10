import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GestorService } from '../../services/gestor.service';
import { Gestor } from '../../models/gestor';
import { Presentismo } from '../../models/presentismo';

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
    console.log('Set presente for id: ',id,value);
    if(!value){
      if(confirm('Are you sure that you want to remove the presente state?')){
        console.log('presente removed');
      }
    }
  }


}
