import { Injectable } from '@angular/core';
import {catchError, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Movie } from './movieinterface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '2576b52c1a16c5be417e2764a009614e';
    this.language = 'en-US';
    this.region = 'US';
  }


  

 public getTopRatedMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
   // console.log('hmmmm')
   // console.log(this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`));

    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);

  }
  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

}