import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {JokesComponent} from './components/jokes/jokes.component';
import {AnimalsComponent} from './components/animals/animals.component'; // CLI imports router

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'jokes', component: JokesComponent},
  {path: 'animal', component: AnimalsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
