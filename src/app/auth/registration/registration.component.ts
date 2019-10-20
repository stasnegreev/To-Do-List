import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';


import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/module/user.model';
import {Router} from '@angular/router';
import {Message} from '../../shared/module/message.model';

@Component({
  selector: 'tdl-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  message: Message;

  constructor(
    private userService: UserService,
    private router: Router,
    private title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('Регистрация');
    this.message = new Message('','');
    this.regForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email],[this.forbiddenEmails.bind(this)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required, Validators.pattern(/^[А-Я]{1}[а-я]{1,20}$/)]),
    });
  }

  onSubmit() {
    console.log('this.regForm.value=', this.regForm.value);
    const {email, password, name} = this.regForm.value;
    const user = new User(email, password, name);
    this.userService.createNewUser(user)
      .subscribe(() => {
        console.log('added');
        this.router.navigate(['/login']);
    });
  }
  forbiddenEmails(control: FormControl): Promise<any> {
    console.log(control, control.value, this.regForm);
    return new Promise<any>((resolve, reject) => {
      this.userService.getUserByEmail(control.value)
        .subscribe((users: User[]) => {
          if (users[0]) {
            resolve({forbiddenEmails: true});
          } else {
            resolve(null);
          }
        });
    });
  }
}
