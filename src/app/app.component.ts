import { Component } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public FormBuilder:FormBuilder){}

  todoList: Todo[] = [];
  todoForm = this.FormBuilder.group(
    {
    title:''
  }
  )
  
  Add():void{
    if(this.todoList.filter(todo => todo.title === this.todoForm.value.title).length == 0){
      this.todoList.push(new Todo(this.todoForm.value.title));
      this.todoForm.reset();
      console.warn(this.todoList)
    }
    else{
      alert("Duplicate todo list Title not allowed...");
      this.todoForm.reset();
    }

  }
  
  getTodoList():void{

  }

  Remove(title:string){
    for(let i = 0; i < this.todoList.length; i++){
      if(title === this.todoList[i].title){
        this.todoList.splice(i,1);
      }
    }
    console.warn(this.todoList)
  }

  RemoveCompleted():void{
    for(let i = 0; i<this.todoList.length; i++){
      if(this.todoList[i].done){
        this.todoList.splice(i,1);
      }
    }
  }

  RemoveAll():void{
    this.todoList.splice(0,this.todoList.length);
  }

  TodoChecked(value:boolean, title:string){
    for(let i = 0; i < this.todoList.length; i++){
      if(title === this.todoList[i].title){
        this.todoList[i].done = value;
        console.warn(this.todoList[i].done);
      }
    }
    
  }

}

