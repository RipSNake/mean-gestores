import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestorComponent } from './components/gestor/gestor.component';
import { GestorCardComponent } from './components/gestor-card/gestor-card.component';
import { PresentismoComponent } from './components/presentismo/presentismo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

/*
	Routes tell the Router which view to display when a user clicks 
	a link or pastes a URL into the browser address bar.

	A typical Angular Route has two properties:

	- path: a string that matches the URL in the browser address bar.
	- component: the component that the router should create when navigating to this route.
*/

const routes: Routes = [
	{ path: '', redirectTo: '/gestors', pathMatch: 'full' },
	{ path: 'gestors', component: GestorComponent }, // Table with all gestors
	{ path: 'gestor/:id', component: GestorCardComponent },	// Detail of one Gestor
	{ path: 'presentismo', component: PresentismoComponent }, // Display Presentismo for the day
	{ path: '**', component: PageNotFoundComponent } // WildCardRoute
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }