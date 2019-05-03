import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  private url = 'http://localhost:55657/api/population';
  private loginurl = 'http://localhost:55657/api/login';
  public list = [];
  constructor(private http: HttpClient) { }

postData(data) {
  return this.http.post( this.url, data);
}
}
