import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApproverService } from 'src/app/approver.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  isListFetched: boolean = false;
  pendingList: any[] = [];
  members: any;
  constructor(private router: Router, private service: ApproverService) {


  }

  ngOnInit() {

    // this.service.listFetchedEvent.subscribe((data) => {
    //   if (data) {
    //     console.log(this.service.acceptedlist);
    //   }
    // });
    this.service.getData().subscribe((data: any) => {
      console.log(data);
      for (let item of data) {
        if (item.requestStatus === 0) {
          this.service.getMemberData(item.memberID).subscribe((dataa: any) => {
            this.pendingList.push(dataa);
          });
        }
        this.isListFetched = true;
      }
    });
  }

}
