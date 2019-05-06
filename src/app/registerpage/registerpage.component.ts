import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  userModel = new Register('r@gmail.com', '1234', 'Rupal', 'Kapoor', 'abc', 123456);
  imageUrl = '/assets/image/smiley.jfif';
  fileToUpload: File = null;
  binaryString: string;
  display = false;
  base64textString: string;
  constructor(private router: Router,
    private _memberservice: UserserviceService) { }

  ngOnInit() {
  }


  submit() {
    // console.log(this.userModel.Email);
    // console.log(this.userModel.FirstName);
    // console.log(this.userModel.Password);
    console.log(this.userModel);
    this._memberservice.postData(this.userModel, this.binaryString, this.fileToUpload.name).subscribe((data) => {
      if (!data) {
        alert('Data was not added');

      }
      else {
        alert('Data was successfully added');
      }

    });


  }
  onImageUpload(evt: any) {
    this.display = true;
    this.fileToUpload = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      console.log(event);
      this.binaryString = btoa(event.target.result);
      this.base64textString = 'data:image/jpeg;base64,' + btoa(event.target.result);

    };
    reader.readAsBinaryString(this.fileToUpload);
  }

}
