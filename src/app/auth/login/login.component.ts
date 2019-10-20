import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/module/user.model';
import {Message} from '../../shared/module/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'tdl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: Message;

  constructor(
    private authService: AuthService,
    private usersServise: UserService,
    private title: Title,
    private router: Router,
  ) { }

  ngOnInit() {
    this.title.setTitle('Вход в систему');
    this.message = new Message('','');
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
      }
    );
  }

  onSubmit() {
    const email = this.loginForm.value.email + '';
    this.usersServise.getUserByEmail(email)
      .subscribe((resp: User[]) => {
        const user = resp[0];
        console.log('user=', user);
        if (user) {
          if (user.password === this.loginForm.value.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['home']);
            console.log('has log in');
          } else {
            this.message.showMessage('danger','Password is wrong');
          }
        } else {
          this.message.showMessage('danger','Email does not exist');
        }
      });
  }
}

