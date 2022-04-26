import { TestBed , async, tick, fakeAsync} from "@angular/core/testing";
import { CatalogComponent } from "./catalog.component";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MoviesService } from "src/app/movies.service";
import { LogInComponent } from "src/app/log-in/log-in.component";
import { RouterTestingModule } from '@angular/router/testing';
import { delay, Observable } from "rxjs";
import { Movie } from "src/app/movieinterface";
import * as Rx from 'rxjs';
import { UserService } from "src/app/users.service";
describe ('component:Catalog',()=>{
    //let movieservice:MoviesService,
   let httpMock:HttpTestingController;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule,RouterTestingModule ],
            declarations:[CatalogComponent],
            providers:[MoviesService, UserService]
        });
        httpMock=TestBed.inject(HttpTestingController);

    })
    it ('given an instance',()=>{
        let fixture =TestBed.createComponent(CatalogComponent);
        let app =fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it ('should call getTopRatedMovies and movies as a response', () =>{
        let fixture=TestBed.createComponent(CatalogComponent);
        let app =fixture.debugElement.componentInstance;
        let movieservice=fixture.debugElement.injector.get(MoviesService);
        const dummymovies:Movie[]=[{
            id: 1,
            original_title: 'hello',
            title: 'hello',
            tagline: 'darkeness',
            overview: 'my',
            genres: 'old',
            poster_path: 'friend',
            runtime: 1,
            vote_average: 1

        }];
        movieservice.getTopRatedMovies(1).subscribe((res: any) => {
    
            expect(res).toEqual(dummymovies);

        });
        const req=httpMock.expectOne(
            `${movieservice.baseUrl}movie/top_rated?api_key=${movieservice.apiKey}&page=${1}&language=${movieservice.language}&region=${movieservice.region}`
        );
        req.flush(dummymovies);
        httpMock.verify();
        }) 
    });
