import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path:':cat1/:cat2', component: MainComponent
  },
  {
    path:':cat1/:cat2/:cat3', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
