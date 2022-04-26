import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { CatalogComponent } from './movies/catalog/catalog.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';


const routes: Routes = [
  {path:'', component:LogInComponent},
  {path:'login', component:LogInComponent},
  {path:'catalog',canActivate:[AuthGuard],component:CatalogComponent},
  {path:'catalog/:id',canActivate:[AuthGuard],component:MovieDetailComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
