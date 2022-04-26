import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from 'src/app/movies.service';
import { delay } from 'rxjs';
import { Movie } from 'src/app/movieinterface';
import { UserService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers:[MoviesService]
})

export class CatalogComponent implements OnInit {
  
  topRated: Movie[]=[];
  constructor(private http: HttpClient,private movieService: MoviesService, private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getTopRatedMovies(1);
  }

getTopRatedMovies(page: number) {
  this.movieService.getTopRatedMovies(page).subscribe((res: any) => {
    console.log("ranoun")
   console.log(res.results)
   console.log(res)
    this.topRated = res.results;
  },
  error => console.log(error));
}
logout() {  
  console.log('logout');  
  this.userservice.logout();  
  this.router.navigate(['/login']);  
} 
}
