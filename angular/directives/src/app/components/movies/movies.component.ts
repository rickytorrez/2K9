import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  /** create your variables */
  movies:object[];

  constructor() { 
    this.movies = [
      {title:"EndGame", genre:"action", rating:"4.3"},
      {title:"Thor - Ragnarok", genre:"drama", rating:"3.6"},
      {title:"The Fifth Element", genre:"Science Fiction", rating:"3.9"},
      {title:"Dragon Ball", genre:"Anime", rating:"4.1"},
      {title:"Ace Ventura", genre:"comedy", rating:"2.6"},
    ]
  }

  ngOnInit() {
  }

}
