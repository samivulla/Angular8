import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.myjson.com/bins/j7r9v');
  }
}
