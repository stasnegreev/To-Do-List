import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {SettingService} from "../../shared/services/setting.service";

@Component({
  selector: 'tdl-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Output() greenTheme = new EventEmitter<any>();
  @Output() blueThem = new EventEmitter<any>();
  userName = '';

  constructor(private authService: AuthService,
              private router: Router,
              private settingServuce: SettingService,

  ) { }

  ngOnInit() {
    this.userName = JSON.parse(window.localStorage.getItem('user')).name;
  }
  onLogOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  onGreenTheme(){
    console.log('greenTheme');
    this.settingServuce.onGreenTheme()
  }
  onBlueTheme(){
    this.settingServuce.onBlueTheme();
  }

}
