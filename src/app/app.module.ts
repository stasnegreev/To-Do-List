import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {SystemModule} from './system/system.module';
import {TaskService} from "./shared/services/task.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./shared/services/auth.guard";
import {AuthService} from "./shared/services/auth.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SystemModule,
  ],
  providers: [
    TaskService,
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
