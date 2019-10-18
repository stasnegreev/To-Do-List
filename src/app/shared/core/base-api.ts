import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../module/user.model';

@Injectable()

export class BaseApi {

  private baseUrl = 'http://localhost:3000/';


  constructor(public http: HttpClient) {}

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string): Observable<any> {
    url = this.getUrl(url);
    console.log('url=', url);
    return this.http.get(url);
  }
  public post(url: string, data: any): Observable<any> {
    url = this.getUrl(url);
    return this.http.post(url, data);
  }

}
