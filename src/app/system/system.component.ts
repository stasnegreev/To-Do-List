import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Task} from "../shared/module/task.module";
import {TaskService} from "../shared/services/task.service";

@Component({
  selector: 'tdl-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  isSideBarVisible = true;

  constructor(
      private router: Router,
  ) { }

  ngOnInit() {

  }
  toggleSideBar(){
    this.isSideBarVisible = !this.isSideBarVisible
  }



}
