

import { PostsEffect } from './store/efftects/post.effect';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { reducers } from './store/store'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { FormsModule } from '@angular/forms';


import { SearchArtistsPipe } from './custom-pipes/search-artists.pipe';
import { ResultsItemsComponent } from './results-items/results-items.component';

import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/services/Auth.service';
import { AuthRouteGaurd } from './shared/guards/auth.route.guard'



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistDetailsComponent,
    ArtistItemsComponent,
    SearchArtistsPipe,
    ResultsItemsComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, CommonModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PostsEffect])
  ],
  providers: [AuthService, AuthRouteGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
