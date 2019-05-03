import { Component, OnInit } from '@angular/core';
import { House } from './house';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/house.service';

@Component({
  selector: 'app-houselisting',
  templateUrl: './houselisting.component.html',
  styleUrls: ['./houselisting.component.css']
})
export class HouselistingComponent implements OnInit {
  public OwnershipStatus = ['Owner', 'Rented'];
  userModel = new House('', '', '', '', '', '', 0);
  constructor(private router: Router,
    private service: HouseService) { }

  ngOnInit() {
  }
  
  submit() {
    this.service.postData(this.userModel).subscribe((data) => {
      if (!data) {
        alert('Data was not added');

      }
      else {
        alert('Data was successfully added');
      }
    });
  }

}
