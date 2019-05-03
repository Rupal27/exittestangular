import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApproverService } from 'src/app/approver.service';

@Component({
  selector: 'app-declined',
  templateUrl: './declined.component.html',
  styleUrls: ['./declined.component.css']
})
export class DeclinedComponent implements OnInit {
  isListFetched: boolean = false;
  pendingList: any[] = [];
  members: any;
  public declinedList = new Array();

  constructor(private router: Router, private service: ApproverService) {


  }

  ngOnInit() {


    // this.service.listFetchedEvent.subscribe((data) => {
    //   if (data) {
    //     console.log(this.service.declinedlist);
    //   }
    // });
    this.service.getData().subscribe((data: any) => {
      console.log(data);
      for (let item of data) {
        if (item.requestStatus === 2) {
          this.service.getMemberData(item.memberID).subscribe((dataa: any) => {
            this.pendingList.push(dataa);
          });
        }
        this.isListFetched = true;
      }
      console.log(this.declinedList);
    });
  }

}
