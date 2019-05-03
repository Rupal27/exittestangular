import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApproverService {
  public listFetchedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public pendinglist = [];
  public declinedlist = [];
  public acceptedlist = [];
  private url = 'http://localhost:55657/api/user';
  private memberurl = 'http://localhost:55657/api/member';




  getData() {
    return this.http.get(this.url);
  }

  constructor(private http: HttpClient) {
    // this.getData().subscribe((data: any) => {
    //   console.log(data);
    //   for (let item of data) {
    //     if (item.requestStatus === 1) {
    //       this.pendinglist.push(item.memberID);
    //     }
    //     if (item.requestStatus === 0) {
    //       this.acceptedlist.push(item.memberID);
    //     }
    //     if (item.requestStatus === 2) {
    //       this.declinedlist.push(item.memberID);
    //     }

    //   }

    // });

  }



  getMemberData(value) {
    let newUrl: string = this.memberurl + '/' + value;
    return this.http.get(newUrl);
  }
  getUserData(value) {
    let newUrl: string = this.url + '/' + value;
    return this.http.get(newUrl);
  }
  putRequestStatus(data) {
    let putUrl: string = this.url;
    return this.http.put(putUrl, data);
  }
}

