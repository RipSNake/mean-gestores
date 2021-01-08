import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';
import { GestorService } from '../../services/gestor.service';
import { Gestor } from '../../models/gestor';

@Component({
  selector: 'app-gestor-card',
  templateUrl: './gestor-card.component.html',
  styleUrls: ['./gestor-card.component.css']
})
export class GestorCardComponent implements OnInit {

  private isEditable: boolean = false;
  private isNew: boolean = false;

  @Input() gestor: Gestor = {
    legajo: 0,
    name: '',
    hourShift: '',
    startHour: '',
    endHour: '',
    position: '',
    phone: 0,
    notes: [],
    updatedAt: ''
  };

  constructor(
    private gestorService: GestorService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    if(this.route.snapshot.queryParamMap.get('edit')){
      this.isEditable = true;
    };
  }

  ngOnInit(): void {
  	this.getGestor();
    
    console.log('this.isEdit: ' + this.isEditable);
  }

  resetForm(){
    this.getGestor();
  }

  getGestor(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id === null) {
      console.log('Gestor does not exists');
    } else {
      this.gestorService.getGestor(id).subscribe(
      gestor => this.gestor = gestor
    );  
    }
    
  }

  // We will use this function for Creating and Editing already existing Gestores
  createGestor(form: NgForm) {
    if(form.value._id){
      this.gestorService.editGestor(form.value).subscribe(
        (res) => {
          console.log(res);
          this.getBack(); 
        },
        (err) => console.log(err)
      );
    } else {
      this.gestorService.createGestor(form.value).subscribe(
        (res) => {
          console.log(res);
        },
      (err) => console.log(err)
      );
    }
  }

  getBack(): void {
    this.location.back();
  }

  getEdit(): boolean{
    return this.isEditable;
  }

  getIsNew(): boolean {
    return this.isNew;
  }
}
