//components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistDetailsComponent } from './search/artist-details/artist-details.component';
import { ArtistItemsComponent } from './search/artist-items/artist-items.component';
import { ResultsItemsComponent } from './search/results-items/results-items.component';
//modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import {  NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

//pipes
import { SearchArtistsPipe } from './custom-pipes/search-artists.pipe';

//NGRX
import { PostsEffect } from './store/efftects/post.effect';
import { reducers } from './store/store';
//auth
import { AuthService } from './shared/services/Auth.service';
import { AuthRouteGaurd } from './shared/guards/auth.route.guard';





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistDetailsComponent,
    ArtistItemsComponent,
    SearchArtistsPipe,
    ResultsItemsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,

    StoreModule.forRoot(reducers)
    ,EffectsModule.forRoot([PostsEffect])
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true},
    AuthService, AuthRouteGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
