import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  public isAdminLogin: boolean = false;
  public isVolunteerLogin: boolean = false;

  private _url = 'http://localhost:55657/api/member';
  private loginurl = 'http://localhost:55657/api/login';
  public list = [];
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this._url);
  }
  postData(member, image: string, name: string) {
    return this.http.post(this._url, { member, image, name });
  }
  findUser(data) {
    return this.http.post(this.loginurl, data);
  }

}
