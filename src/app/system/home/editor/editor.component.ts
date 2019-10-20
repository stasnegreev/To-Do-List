import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../../shared/module/message.model";
import {NgForm} from "@angular/forms";
import {Task} from "../../../shared/module/task.module";
import {TaskService} from "../../../shared/services/task.service";

@Component({
  selector: 'tdl-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() editTask: Task;
  @Output() onEditorCancel = new EventEmitter<any>();
  @Output() onTaskEdit = new EventEmitter<Task>();
  @Output() onTaskRemoved = new EventEmitter<Task>();
  @Output() onTaskDone = new EventEmitter<Task>();
  @Output() onTaskDuring = new EventEmitter<Task>();

  constructor(
      private taskService: TaskService,
  ){

  }
  editForm: any ;

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
    this.editForm = {
      name: this.editTask.name,
      description: this.editTask.description,
      priority: this.editTask.priority,
      color: this.editTask.color
    };
  }

  closeEditor() {
    this.onEditorCancel.emit();
  }

  onSubmit(form: NgForm){
  this.editTask.name = form.value.name;
  this.editTask.description = form.value.description;
  this.editTask.priority = form.value.priority;
  this.editTask.color = form.value.color;
  this.taskService.editTask( this.editTask)
      .subscribe( () => {
        this.onTaskEdit.emit(this.editTask);
      });
  }
  removeTask(){
  console.log('remove');
    this.taskService.deleteTask(this.editTask)
        .subscribe( () => {
          console.log('removed');

          this.onTaskRemoved.emit(this.editTask);
        });
  }
  doneTask(){
    this.editTask.status = 'done';
    this.taskService.editTask( this.editTask)
        .subscribe( () => {
          this.onTaskDone.emit(this.editTask);
        });
  }
  duringTask(){
    this.editTask.status = 'during';
    this.taskService.editTask( this.editTask)
        .subscribe( () => {
          this.onTaskDuring.emit(this.editTask);
        });
  }

}
