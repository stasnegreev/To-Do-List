import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { CreaterComponent } from './creater/creater.component';
import {TaskService} from "../shared/services/task.service";

@NgModule({
  declarations: [
    SystemComponent,
    HomeComponent,
    SettingsComponent,
    CreaterComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
  ],
  providers: [
    TaskService
  ]
})
export class SystemModule { }
