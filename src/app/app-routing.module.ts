
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SearchComponent } from './search/search.component';
import { AuthRouteGaurd } from './shared/guards/auth.route.guard';

const routes: Routes = [
  {
    path: '',
     component: HomeComponent

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(_ => _.LoginModule),
    canActivate: [AuthRouteGaurd]
  },
  { path: 'search', component: SearchComponent, canActivate: [AuthRouteGaurd] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }