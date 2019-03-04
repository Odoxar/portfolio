import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAnimationService {

  public state = new BehaviorSubject<boolean>(false);

  public currentState = this.state.asObservable();

  constructor() { }

  changeState(bool: boolean): void {
    this.state.next(bool);
  }
}
