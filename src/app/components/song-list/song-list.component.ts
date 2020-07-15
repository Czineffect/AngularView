import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../../services/library.service'; 
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  library : any;
  results;
  constructor(private req:LibraryService, private router: Router) { }

  ngOnInit() {
 
    this.req.getLibraryResults().subscribe(data => {
      this.library = data;
      console.log(this.library); 
    })
  }
 filter(token:string)
 {
  let filterValueLower = token.toLowerCase();
  if(token === '' ) {
      this.library=this.results;
  } 
  else {
    this.library = this.results.filter((song) => this.library.Genre.includes(filterValueLower) || this.library.AlbumName.includes(filterValueLower) || this.library.ArtistName.includes(filterValueLower))
  }
 }
 showAlbum(id)
 {
    this.router.navigate(['/show-album/'+id]); 
 }

}
