import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private url = 'http://localhost:55657/api/house';
  private loginurl = 'http://localhost:55657/api/login';
  public list = [];
  constructor(private http: HttpClient) { }

postData(data) {
  return this.http.post( this.url, data);
}
getStatePopulationReport()
{
  return this.http.get('http://localhost:55657/api/house?state=all');
}
}
