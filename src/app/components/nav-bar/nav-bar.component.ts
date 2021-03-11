import { Component, OnInit } from '@angular/core';
import { GestorService } from '../../services/gestor.service';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Gestor } from '../../models/gestor';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private searchTerm: string = '';

  constructor(private gestorService: GestorService) { }

  ngOnInit(): void {
   
  }

  // Displays results matching the string tipped in the search-bar
  searchGestor(term: string): void{
    console.log('Search Gestor fn');
    console.log('This function has to be bind as a filter for the gestor.component gestores array');
  }
}
