import { Injectable } from '@angular/core';
import {BaseApi} from '../core/base-api';
import {Observable} from 'rxjs';
import {User} from '../module/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService extends BaseApi {



  getUserByEmail(email: string): Observable<any> {
    console.log('email=', `user&email=${email}`);
    return this.get(`users?email=${email}`);
  }
  createNewUser(user: User): Observable<any> {
    return this.post('users', user);
  }


}
