import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css']
})
export class ApproverComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogOut() {

    alert('You are going to logout');

    this.router.navigateByUrl('/');
  }

}
