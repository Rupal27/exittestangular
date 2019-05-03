import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApproverService } from 'src/app/approver.service';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  isListFetched: boolean = false;
  pendingList: any[] = [];
  members: any;
  constructor(private router: Router, private service: ApproverService) {


  }

  ngOnInit() {
    // this.service.listFetchedEvent.subscribe((data) => {
    //   if (data) {
    //     console.log(this.service.pendinglist);
    //   }
    // });
    this.service.getData().subscribe((data: any) => {
      console.log(data);
      for (let item of data) {
        if (item.requestStatus === 1) {
          this.service.getMemberData(item.memberID).subscribe((dataa: any) => {
            console.log(dataa);
            this.pendingList.push(dataa);
          })
        }
        this.isListFetched = true;



      }

    });
  }
  accepted(data) {
    // console.log(data);

    this.service.getData().subscribe((dataaa: any[]) => {
      // console.log(dataaa);
      let userRequestObject = dataaa.find(function (element) {
        return element.memberID === data.memberID;
      });
      userRequestObject.requestStatus = 0;

      this.service.putRequestStatus(userRequestObject).subscribe((res) => {
        console.log(res);
      });
    });
    // console.log(this.service.putRequestStatus(userobject));
  }

  declined(data) {
    console.log(this.service.putRequestStatus(data));
  }

}

