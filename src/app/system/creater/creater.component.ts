import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from "../../shared/module/message.model";
import {NgForm} from "@angular/forms";
import {TaskService} from "../../shared/services/task.service";
import {Task} from "../../shared/module/task.module";

@Component({
  selector: 'tdl-creater',
  templateUrl: './creater.component.html',
  styleUrls: ['./creater.component.scss']
})
export class CreaterComponent implements OnInit{
  @Output() onCreaterCancel = new EventEmitter<any>();
  @Output() onTaskAdd = new EventEmitter<Task>();

  constructor(private taskService: TaskService){

  }
  massage: Message;
  types = [
    {type: 'hight', label: 'Hight'},
    {type: 'medium', label: 'Medium'},
    {type: 'low', label: 'Low'}
  ];


  ngOnInit() {
    this.massage = new Message('success', '');
  }

  closeCreater() {
    this.onCreaterCancel.emit();
  }
  onSubmit(form: NgForm){
    console.log("form submit");
    this.closeCreater();
    let {name, description, priority} = form.value;
    const task = new Task(name, description, priority, "during", new Date());
    this.taskService.addTask(task)
        .subscribe( () => {
          this.onTaskAdd.emit(task);
        })
  }
}
