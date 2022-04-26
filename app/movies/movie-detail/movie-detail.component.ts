import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/movieinterface';
import { MoviesService } from 'src/app/movies.service';
import { UserService } from 'src/app/users.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers:[MoviesService]
})
export class MovieDetailComponent implements OnInit {
  id: number=0;
  movie:any;
  constructor(private movieservice:MoviesService,
    private userservice:UserService,
     private activerouter: ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
      this.activerouter.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.getmoviedetails()
      });

}
getmoviedetails(){
  this.movieservice.getMovieDetails(this.id).subscribe((res: any) => {
    this.movie = res;
    console.log('anafein')
    console.log(res)
  });
}
logout() {  
  console.log('logout');  
  this.userservice.logout();  
  this.router.navigate(['/login']);  
} 
}




