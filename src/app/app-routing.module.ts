import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
