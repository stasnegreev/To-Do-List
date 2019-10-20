import {Component, DoCheck, OnInit} from '@angular/core';
import {Task} from "../../shared/module/task.module";
import {TaskService} from "../../shared/services/task.service";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {fadeStateTrigger} from "../../shared/animation/fade.animation";
import {Title} from "@angular/platform-browser";
declare const $;

@Component({
  selector: 'tdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeStateTrigger],
})
export class HomeComponent implements OnInit {
  editTask: Task;
  isEditorVisible = false;
  isCreaterVisible = false;
  tasks: Task[];
  duringTasks: Task[] = [];
  doneTasks: Task[] = [];
  viewList: boolean;
  isLoaded = false;
  userName = '';
  prioritys=[
    {type: 'hight', label: 'Hight'},
    {type: 'medium', label: 'Medium'},
    {type: 'low', label: 'Low'}
  ];
  priorityVisible = {
    hight: true,
    medium: true,
    low: true
  };

  constructor(
      private taskService: TaskService,
      private authService: AuthService,
      private router: Router,
      private title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('Home');
    this.taskService.getTasks()
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
        this.duringTasks = tasks.filter((item) => item.status === 'during' && this.priorityVisible[item.priority]);
        this.doneTasks = tasks.filter((item) => item.status === 'done' && this.priorityVisible[item.priority]);
      });
    this.viewList = true;
    setTimeout(() => this.isLoaded = true, 2000)
    this.userName = JSON.parse(window.localStorage.getItem('user')).name;
  }
  onLogOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  filterAdded(form: NgForm){
    console.log(form);
    this.priorityVisible = form.value;
    this.duringTasks = this.tasks.filter(((item) => item.status === 'during' && this.priorityVisible[item.priority]), this);
    console.log('ngDoCheck');
    this.doneTasks = this.tasks.filter(((item) => item.status === 'done' && this.priorityVisible[item.priority]), this);
        console.log(this.priorityVisible);
    $('.button_filter .dropdown-toggle').dropdown('hide')
  }
  onViewList(){
    this.viewList = true;
  }
  onViewGrid(){
    this.viewList = false;
  }
  onSortDown() {
    this.duringTasks.sort((a, b) => Date.parse(a.data) - Date.parse(b.data));
    this.doneTasks.sort((a, b) => Date.parse(a.data) - Date.parse(b.data));
  }
  onSortUp() {
    console.log('befor', this.duringTasks);
    this.duringTasks.sort((a, b) => Date.parse(b.data) - Date.parse(a.data));
    this.doneTasks.sort((a, b) => Date.parse(b.data) - Date.parse(a.data));
  }


  openTaskCreater(){
    this.isCreaterVisible = true;
  }
  closeTaskCreater(){
    this.isCreaterVisible = false;
  }
  taskAdded(task: Task) {
    this.duringTasks.unshift(task);
    this.closeTaskCreater();
  }
  openEditor(task){
    this.isEditorVisible = true;
    this.editTask = task;
  }
  closeEditor(){
    this.isEditorVisible = false;
  }
  closeTaskEditor(){
    this.closeEditor();
  }
  onTaskEdit(task: Task) {

    if (task.status === 'during') {
      this.duringTasks.forEach((item, i, arr) =>{
        if (item.id === task.id){
          arr[i] = task
        }
      });
    } else {
      this.doneTasks.forEach((item, i, arr) =>{
        if (item.id === task.id){
          arr[i] = task
        }
      });
    }
    this.closeEditor()
  }
  onTaskRemoved(task){
    this.duringTasks.forEach((item, i, arr) =>{
      if (item.id === task.id){
        arr.splice(i, 1);
      }
    });
    this.doneTasks.forEach((item, i, arr) =>{
      if (item.id === task.id){
        arr.splice(i, 1);
      }
    });
    this.closeEditor();
  }
  onTaskDone(task) {
    this.duringTasks.forEach((item, i, arr) => {
      if (item.id === task.id) {
        arr.splice(i, 1);
      }
    });
    this.doneTasks.unshift(task);
    this.closeEditor();
  }
  onTaskDuring(task){
    this.doneTasks.forEach((item, i, arr) => {
      if (item.id === task.id) {
        arr.splice(i, 1);
      }
    });
    this.duringTasks.unshift(task);
    this.closeEditor();
  }
}
