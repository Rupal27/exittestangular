import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }
  onLogOut() {

    alert('You are going to logout');

    this.router.navigateByUrl('/');
  }

}
