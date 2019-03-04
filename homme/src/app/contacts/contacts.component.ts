import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { LocaleService, Language } from 'angular-l10n';
import { DataAnimationService } from '../shared/services/data-animation.service';
import { Subscription } from 'rxjs';
import { langAnimationTriger } from '../shared/animations/app.animation';
import { contactsAnimationTrigger } from '../shared/animations/contacts.animation';

@Component({
  selector: "dsa-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
  animations: [langAnimationTriger, contactsAnimationTrigger]
})
export class ContactsComponent implements OnInit, OnDestroy {
  //@HostBinding("@contactsAnimation") routerTransition = true;
  public animateLanguage: boolean;
  @Language() lang: string;
  private subscription: Subscription;

  public contacts: any = [
    {
      name: "contacts.persons.veremchuk.name",
      phone: "contacts.persons.veremchuk.phone",
      img:
        "../../assets/images/contacts/veremchykO.jpg"
    },
    {
      name: "contacts.persons.shelmuk.name",
      phone: "contacts.persons.shelmuk.phone",
      img:
        "../../assets/images/contacts/shelmukY.jpg"
    }

  ];

  constructor(
    public state: DataAnimationService,
    public locale: LocaleService
  ) {}

  ngOnInit() {
    this.subscription = this.state.currentState.subscribe(
      bool => (this.animateLanguage = bool)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
