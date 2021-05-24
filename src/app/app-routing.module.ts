import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path:':cat1', component: MainComponent
  },
  {
    path:':cat1/:cat2', component: MainComponent
  },
  {
    path:':cat1/:cat2/:cat3', component: MainComponent
  },
  { 
    path: '',   redirectTo: '/login', pathMatch: 'full' 
  },
  {
    path: '**', component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
