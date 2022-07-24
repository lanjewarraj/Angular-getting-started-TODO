import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeLast } from 'rxjs';

import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoList : Todo[] = [];
  
  todoFrm = new FormGroup({
    input: new FormControl('',
      Validators.required
    )
  })

  addTodo(){
    if(this.todoFrm.value.input != ''){

      const newTodo:Todo = {
        id: Date.now(),
        value: this.todoFrm.value.input,
        isComplete: false,
        date: Date()
      }

      this.todoList.push(newTodo);

      console.log(this.todoList);

      this.todoFrm.reset();

    }else{
      alert('please enter todo value');
    }
  }


  delTodo(id: number){
    this.todoList = this.todoList.filter(item => item.id != id);
    console.log(this.todoList);
  }


}
