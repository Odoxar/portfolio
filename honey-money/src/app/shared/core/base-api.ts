import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class BaseApi {

  private baseUrl = 'https://my-json-server.typicode.com/Odoxar/odoxar.github.io/';


  constructor(
    public http: HttpClient
  ) {
  }


  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = '', Sclass: any = 'any'): Observable<any> {
    return this.http.get<any>(this.getUrl(url), {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    });
  }

  public post(url: string = '', data: any = {}, Sclass: any = 'any'): Observable<any> {
    return this.http.post<any>(this.getUrl(url), data, { 
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    });
  }

  public put(url: string = '', data: any = {}, Sclass: any = 'any'): Observable<any> {
    return this.http.put<any>(this.getUrl(url), data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
