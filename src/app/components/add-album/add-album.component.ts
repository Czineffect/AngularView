import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LibraryService} from '../../services/library.service'
@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
addAlbumForm: FormGroup
 // constructor(private serive: LibraryService, private fb: FormBuilder) { }
  constructor(){}
  ngOnInit() {
    /*
    this.addAlbumForm = this.fb.group({
      AlbumName:[null, Validators.required],
      ArtistName:[null, Validators.required],
      Cost:[null, Validators.required],
      PublishedYear: [null, Validators.required]
    });
    */ 
  }

}
