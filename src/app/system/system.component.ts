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
  tasks: Task[];
  isCreaterVisible = false;

  constructor(
      private router: Router,
  ) { }

  ngOnInit() {

  }

  openTaskCreater(){
    console.log(' this.isCreaterVisible=', this.isCreaterVisible);
    this.isCreaterVisible = true;
    console.log(' this.isCreaterVisible=', this.isCreaterVisible);
  }
  closeTaskCreater(){
    this.isCreaterVisible = false;
  }



}
