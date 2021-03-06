import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRouteModules } from './Home.route.module';

@NgModule({
  declarations:[
  HomeComponent
  ],
  imports:[
   HomeRouteModules
  ]
})
export class HomeModule{}