import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { CreaterComponent } from './home/creater/creater.component';
import {TaskService} from "../shared/services/task.service";
import { EditorComponent } from './home/editor/editor.component';

@NgModule({
  declarations: [
    SystemComponent,
    HomeComponent,
    SettingsComponent,
    EditorComponent,
    CreaterComponent,
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
