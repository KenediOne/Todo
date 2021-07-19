import { Component, OnInit } from '@angular/core';
import { Task } from '../Task'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  name: string = '';

  taskArray: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.taskArray.push({
      id: new Date(),
      name: this.name
    })
  }


  deleteTask(id: Date) {
    this.taskArray.splice(getValue(this.taskArray, id), 1);
  }


}

function getValue(array: Task[], search: Date): any {
  let i = array.length;
  while (i--) {
    if (array[i].id === search) {
      return i;
    }
  }
}
