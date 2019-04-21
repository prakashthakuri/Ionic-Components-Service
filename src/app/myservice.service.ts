import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public theData: String;
  public theJoke: String;


  constructor(public http: HttpClient) { }

  doTheHardStuff() {

    // create Connection to the API
    // ****************
    let connectionUrl = 'https://api.chucknorris.io/jokes/random';
    return this.http.get(connectionUrl);

    // const connectionUrl = 'https://api.chucknorris.io/jokes/random';

    // const connection = this.http.get(connectionUrl);

console.log('This is doTheHardStuff() function in service, displaying the data');
    // @ts-ignore
    connection._subscribe(result => {

      this.theData = result;
      this.theJoke = result.body.value; // Displays on the Browser
      console.log('in getData, got data', result);
    });
    }





}



