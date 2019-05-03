import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public list = [];
  constructor(private router: Router,
    private _memberservice: UserserviceService) {
  }
  userModel = new Login('', '');
  ngOnInit() {
    this._memberservice.getData().subscribe((data: any) => {
      console.log(data);
    });
  }
  register() {
    console.log('hello');
    this.router.navigateByUrl('/registerpage');
  }

  submit(data) {
    console.log(this.userModel.Email);
    console.log(this.userModel.Password);
    console.log(this.userModel);
    this._memberservice.findUser(this.userModel).subscribe((data) => {
      if (data === -1) {
       
        alert('You can not login, since your request has not been approved');
        this.router.navigateByUrl('/');
      }
      else {
        alert('You have successfully logged in');
        if (this.userModel.Email === 'approver@gmail.com') {
          this._memberservice.isAdminLogin=true;
          this._memberservice.isVolunteerLogin=false;
          console.log(this.userModel);
          this.router.navigateByUrl('/approver/pending');
        }
        else {
          this._memberservice.isAdminLogin=false;
          this._memberservice.isVolunteerLogin=true;
          localStorage['id'] = data;
          this.router.navigateByUrl('/volunteer');
        }

      }


    });
  }

}
