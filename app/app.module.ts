import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule }   from '@angular/forms';
import { CatalogComponent } from './movies/catalog/catalog.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth-guard.service';
import { MoviesService } from './movies.service';
import { UserService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CatalogComponent,
    MoviesComponent,
    MovieDetailComponent,
    ErrorPageComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,MoviesService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
