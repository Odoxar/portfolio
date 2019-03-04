import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class SidenavService {
  public menuState = new BehaviorSubject<boolean>(false);

  public currentState = this.menuState.asObservable();

  constructor() {}

  changeMenuState(bool: boolean): void {
    this.menuState.next(bool);
  }

}
