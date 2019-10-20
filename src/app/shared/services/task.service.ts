import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {BaseApi} from "../core/base-api";
import {Task} from "../module/task.module";

@Injectable()

export class TaskService extends BaseApi{
    constructor(
        public http: HttpClient
    ) {
        super(http);
    }

    getTasks(): Observable<Task[]>{
        return this.get('tasks');
    }
    addTask(task: any): Observable<any> {
        console.log('taskservice');
        return this.post('tasks', task);
    }
    editTask(task: any): Observable<any> {
        return this.put(`tasks/${task.id}`, task)
    }
    deleteTask(task: any): Observable<any> {
        console.log('delete');
        return this.delete(`tasks/${task.id}`, 'id', task.id);
    }
}
