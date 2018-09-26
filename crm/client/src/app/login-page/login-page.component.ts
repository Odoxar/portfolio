import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../shared/services/auth.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MaterialService } from "../shared/classes/material.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  authSub: Subscription;

  public errors;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.errors = errorsObj;
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });

    this.route.queryParams.subscribe( (params: Params) => {
      if (params['registered']) {
        MaterialService.toast("Now you can logged");
      } else if (params['accessDenied']) {
        MaterialService.toast("You mast authoraized");
      } else if (params['sessionExpired']) {
        MaterialService.toast("Session expired. Please logined.");
      }
    })
  }

  onSubmit() {
    this.form.disable();
    this.authSub = this.auth.login(this.form.value)
      .subscribe(
        () => this.router.navigate(['/overview']),
        error => {
          MaterialService.toast(error.error.message);
          this.form.enable();
        });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}

const errorsObj = {
  email: {
    required: "email must not be empty",
    emailError: "Enter correct email"
  },
  password: {
    required: "password must not be empty",
    minLength: [
      "password must be bigger then ",
      "sumbols",
      "Now"
    ]
  }
};
