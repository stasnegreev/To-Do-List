import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from "../../../shared/module/message.model";
import {NgForm} from "@angular/forms";
import {TaskService} from "../../../shared/services/task.service";
import {Task} from "../../../shared/module/task.module";

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
  colors = [
    {btn: 'light', label: 'White', color: 'white'},
    {btn: 'danger', label: 'Red', color: '#FFE8DC'},
    {btn: 'success', label: 'Green', color: '#ADE7D4'}
  ];


  ngOnInit() {
    this.massage = new Message('success', '');
  }

  closeCreater() {
    this.onCreaterCancel.emit();
  }
  onSubmit(form: NgForm){
    if (form.invalid) {
      if(form.name) {
        this.massage.showMessage('danger', 'Select priority')
      } else{
        this.massage.showMessage('danger', 'Enter task name')
      }
      return;
    };
    console.log("form submit");
    let {name, description, priority, color} = form.value;
    const task = new Task(name, description, priority, "during", new Date(), color);
    this.taskService.addTask(task)
        .subscribe( (t) => {
          this.onTaskAdd.emit(t);
        })
  }
}
