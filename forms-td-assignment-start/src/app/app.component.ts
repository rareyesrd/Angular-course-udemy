import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild("f") handleForm: NgForm;

  showData = false;
  subscriptions = ["Basic", "Advanced", "Pro"];

  data = {
    email: "",
    level: "",
    password: "",
  };

  ngOnInit(): void {
    // console.log(this.handleForm)
  }

  onSubmit(): void {
    console.log(this.handleForm);
    this.data.email = this.handleForm.value.email;

    // Check if select options was selected and setting a default value to Advanced
    !this.handleForm.controls.level.touched ||
    this.handleForm.controls.level.value === ""
      ? (this.data.level = "Advanced")
      : (this.data.level = this.handleForm.value.level);

    this.data.password = this.handleForm.value.password;
    this.showData = !this.showData;
    console.log(this.data);
    // this.handleForm.resetForm();
  }
}
