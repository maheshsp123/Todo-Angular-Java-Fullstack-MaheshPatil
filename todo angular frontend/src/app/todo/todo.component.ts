import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoService } from '../service/data/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo:Todo
  todoid:number = -1



  constructor(public service:TodoService,  public route:ActivatedRoute, public router:Router) { 
    this.todo=new Todo(-1,"add-username","add-description",new Date(),false)

  }

  ngOnInit(): void {
    this.todoid = this.route.snapshot.params['id'] //['id'] id is defined in app-routing mapping
    if(this.todoid != -1){
        this.service.getTodoByIdExecute("mahesh",this.todoid).subscribe(
          response=>{
            this.todo= response;
            console.log(`featched todo id= ${this.todo.id}, descr=${this.todo.description}`)
          } 
        )
    }
  }

  saveTodo(){
    if(this.todoid != -1)
    {
        console.log("updating todo item")
        
        this.service.updateTodoExecute("mahesh",this.todo.id,  this.todo).subscribe(
          data=> {
            this.router.navigate(['list-todos'])
          }
        )
    }
    else{
      console.log("saving new todo item")
      this.todo.username="mahesh"
      this.service.addNewTodoExecute("mahesh",this.todo.id,  this.todo).subscribe(
        data=> {
          this.router.navigate(['list-todos'])
        }
      )

    }

  }
}
