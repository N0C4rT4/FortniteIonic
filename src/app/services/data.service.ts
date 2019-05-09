import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getChallenge()
  {
    return this.http.get('https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=current');
  }
  getWeapon(){
    return this.http.get('https://fortnite-public-api.theapinetwork.com/prod09/weapons/get');
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
