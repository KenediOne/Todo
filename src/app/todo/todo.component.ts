import { Component, OnInit } from '@angular/core';
import { Todo } from '../Task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visible: boolean = false;

  public items: string[] = [];

  /* A two-way binding performed which
     pushes text on division */
  public newTask: string = '';


  /* When input is empty, it will
     not create a new division */
  public addToList() {
    if(!this.visible){
      this.visible = true;
    }
    else {
      if (this.newTask == '') {
      } else {
        this.items.push(this.newTask);
        this.newTask = '';
        this.visible = false;
      }
    }
  }

  /* This function takes to input the
     task, that has to be deleted*/
  public deleteTask(index: number) {
    this.items.splice(index, 1);
  }

  clear() {
    this.newTask = '';
    this.visible = false;
  }
}

