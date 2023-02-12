import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../service/data/todo.service';


export class Todo{
  constructor(public id:number, public username:string, public description:string, 
      public targetDate:Date, public done:Boolean)
  {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  todos=[
    {id:1, description:"abc"},
    {id:2, description:"qwe"},
    {id:3, description:"zxc"}
  ]

  todos1=[new Todo(1,"mahesh","zxc", new Date(), false), 
          new Todo(2,"mahesh","asd", new Date(), false)
        ]
  public todoArr: Todo[] = [];
  public message:string = "";
 
  
  
  constructor(public todoService:TodoService, public router:Router) { 
    
  }

  ngOnInit(): void {
    this.refreshTodo()
    
     
  }

  refreshTodo(){
    this.todoService.retrievAllTodos("mahesh").subscribe(
      response=>{
        console.log("response received- retrievAllTodos ")
        console.log("response= "+response[0].done)
        this.todoArr=response;
        // console.log("todoArr[0].isDone= "+ this.todoArr[0].done)
      }  
    )
  }

  deleteTodoBtnClick(todoid: number){
    console.log(`deleting todo id=${todoid}`);
    this.todoService.deleteTodoExecute('mahesh',todoid).subscribe(
      response=>{ 
        console.log(`Deleting of todo id=${todoid} is successful`);
        this.message=`Deleting of todo id=${todoid} is successful`
        this.refreshTodo()
        
      }
    )
  }

  updateTodoBtnClick( todoid:number ){
    console.log(`updating todo id=${todoid}`);
    this.message=`updating todo id=${todoid}` 
    this.router.navigate([`todo`, todoid])
  }

  newTodoBtnClick(){
    console.log("adding new todo")
    this.router.navigate([`todo`, -1])
  }

}
