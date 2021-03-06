
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./home/home.module').then(_ => _.HomeModule)
  },
  {
  path:'login',
  loadChildren:() => import('./login/login.module').then(_ => _.LoginModule)
}];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }