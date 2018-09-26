import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from "rxjs";
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'dsa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private usersService: UsersService,
    private router: Router,
    private title: Title
  ) {
    title.setTitle('Регистрация');
   }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue ]),
    });
  }

  onSubmit() {
    const {email, password, name} = this.form.value,
          user = new User(email, password, name);


    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        });

      });
  }

  forbiddenEmails(control: FormControl): Observable<any> {
    return this.usersService.getUserByEmail(control.value)
    .takeUntil(this.ngUnsubscribe)
    .map((user: User) => {
      if (user) {
        return {forbiddenEmail: true};
      } else {
        return null;
      }
    })
    .debounceTime(300);
  }

}
