import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'; 
import { Album } from '../interfaces/album';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private REST_API_URL : string = "https://localhost:44317/"; 
  constructor(private _http: HttpClient) { }

  getLibraryResults()
  {
    return this._http.get<Album[]>(this.REST_API_URL + "api/Library"); 
  }
  createNewAlbum(album:Album)
  {
    return this._http.post(this.REST_API_URL+"api/music/Library", album);
  }
  showAlbum(id: number)
  {
    return this._http.get(this.REST_API_URL + "api/Library/GetAlbum")
  }
  deleteAlbum(id: number)
  {
    return this._http.get(this.REST_API_URL + "api/music/DeleteAlbum")
  }
}
