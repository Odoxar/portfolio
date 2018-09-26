import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from '../../../shared/core/base-api';
import { DSAEvent } from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super (http);
  }

  addEvent(event: DSAEvent): Observable<DSAEvent> {
    return this.post('events', event);
  }

  getEvent(): Observable<DSAEvent[]> {
    return this.get('events', event);
  }

  getEventById(id: string): Observable<DSAEvent> {
    return this.get(`events/${id}`);

  }
}
