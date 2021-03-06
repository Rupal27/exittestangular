import { Directive } from '@angular/core';
import { AsyncValidator, ValidationErrors, NG_ASYNC_VALIDATORS, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';



@Directive({
  selector: '[uniqueAadhar]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueAdhaarDirective, multi: true }]
})
export class UniqueAdhaarDirective implements AsyncValidator {
  constructor(private userService: UserserviceService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return new Promise((resolve, reject) => {
      this.userService.getData().subscribe((users: any[]) => {
     
        let user = users.find((user) => {
         
          return parseInt(user.aadharNo) === control.value;
        })
        if (user) {
          
          resolve({ 'unique': true });
        }
        else {
     
          resolve(null);
         
        }

      });
    });

  }


}



