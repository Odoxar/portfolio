import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { MaterialService } from '../shared/classes/material.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public form: FormGroup;
  private authSub: Subscription;

  public errors;

  constructor(
    private auth: AuthService,
    private router: Router
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
  }

  onSubmit() {
    this.form.disable();
    this.authSub = this.auth
      .register(this.form.value)
      .subscribe(
        () => this.router.navigate(["/login"], {queryParams: {
          registered: true
        }}),
        error => {
          MaterialService.toast(error.error.message)
          this.form.enable();
        }
      );
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
