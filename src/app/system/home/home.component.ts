import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../shared/module/task.module";
import {TaskService} from "../../shared/services/task.service";

@Component({
  selector: 'tdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks: Task[];
  viewList: boolean;
  actionVisible: boolean;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    /*this.taskService.getTasks()
        .subscribe( (data) => this.tasks = data)*/

    this.taskService.getTasks().subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
    this.viewList = true;
  }
  onViewList(){
    this.viewList = true;
  }
  onViewGrid(){
    this.viewList = false;
  }
  onAction(){
    this.actionVisible = true;
  }
  onEdit() {

  }
  onRemove(){

  }


}
