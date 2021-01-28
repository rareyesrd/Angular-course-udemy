import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  singUpForm: FormGroup;
  projectStatus = ["Stable", "Critical", "Finished"];

  ngOnInit(): void {
    this.singUpForm = new FormGroup({
      'userdata': new FormGroup({
        'name': new FormControl(null, Validators.required, this.onForbiddenName),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      // 'status': new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.singUpForm);
  }

  /* Validating Test as a project name */

  // onForbiddenName(control: FormControl): { [s: string]: boolean } {
  //   if (control.value == "Test") {
  //     return { 'nameIsForbidden': true };
  //   }
  //   return null;
  // }

  onForbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "Test") {
          resolve({'nameIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  // getStatus(){
  //   this.projectStatus.forEach(item => {
  //     (<FormArray>this.singUpForm.get('status').con)
  //   })
  // }
}
