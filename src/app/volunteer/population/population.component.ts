import { Component, OnInit } from '@angular/core';
import { Population } from './population';
import { Router } from '@angular/router';
import { PopulationService } from 'src/app/population.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {
  public RelationToHead = ['Self', 'Spouse', 'Son', 'Daughter', 'Sibling', 'Grandson', 'Granddaughter'];
  public Gender = ['Male', 'Female', 'others'];
  public MaritalStatus = ['Married', 'Unmarried', 'Divorced'];
  public NatureOfOccupation = ['Public', 'Private', 'SelfEmployed'];
  public OccupationStatus = ['Employed', 'SelfEmployed', 'Student'];
  constructor(private router: Router,
    private service: PopulationService
  ) { }
  userModel = new Population('', 0, '', '', new Date(), '', 0, '', '', 0);
  ngOnInit() {
  }
  

  submit() {
    this.userModel.MemberID = localStorage['id'];
    console.log(this.userModel);


    this.service.postData(this.userModel).subscribe((data) => {
      if (!data) {
        alert('Data was not added');

      }
      else {
        console.log(this.userModel.DOB);
        console.log(this.userModel.NatureOfOccupation);
        alert('Data was successfully added');
      }
    });
  }

}
