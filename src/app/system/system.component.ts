import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Task} from "../shared/module/task.module";
import {TaskService} from "../shared/services/task.service";
import {SettingsComponent} from "./settings/settings.component";
import {SettingService} from "../shared/services/setting.service";

@Component({
  selector: 'tdl-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],

})
export class SystemComponent implements OnInit {
  @ViewChild(SettingsComponent, {static: false}) settings: SettingsComponent;

  isGreenThem = false;
  isSideBarVisible = true;

  constructor(
      private router: Router,
      private settingService: SettingService,
  ) { }

  ngOnInit() {
    this.settingService.isGreenTheme.subscribe((c) => {
      this.isGreenThem = c;
      console.log('settings=', this.isGreenThem)
    });
    console.log('settings=', this.settings)
  }
  toggleSideBar(){
    console.log('hide');
    this.isSideBarVisible = !this.isSideBarVisible
  }





}
