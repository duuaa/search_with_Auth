import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

 
@NgModule({
  declarations:[
   HomeComponent
  ],
  imports:[
   FormsModule,
   MatInputModule,
   MatFormFieldModule,
   MatButtonModule,

  ]
})
export class HomeModule{}