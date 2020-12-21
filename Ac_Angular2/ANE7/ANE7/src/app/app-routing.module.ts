import {​​ NgModule }​​ from '@angular/core';
import {​​ Routes, RouterModule }​​ from '@angular/router';
import {​​ HomeComponent }​​ from './home/home.component';
import {​​ ProductoComponent }​​ from './productos/producto.component';

const routes: Routes = [
  {​​path: 'home', component: HomeComponent}​​,
  {​​path: 'producto', component: ProductoComponent}​​,
];

@NgModule({​​
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}​​)
export class AppRoutingModule {​​ }​​