import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http:HttpClient) { }

  retrievAllTodos(uname:string){
    console.log("todoService retriving all todos")
    // return this.http.get<Todo[]>(`${API_URL}/users/${uname}/todolist`)
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${uname}/todolist`)
  }

  deleteTodoExecute(username:string, todoid:number){
    return this.http.delete(`${JPA_API_URL}/user/${username}/todos/${todoid}`)
  }

  getTodoByIdExecute(username:string,  todoid:number){
    // return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${todoid}`)
    return this.http.get<Todo>(`${JPA_API_URL}/user/${username}/todos/${todoid}`)
  }

  updateTodoExecute(username:string, todoid:number, todo:Todo){
    return this.http.put(`${JPA_API_URL}/user/${username}/todos/${todo.id}`, todo)
  }
  addNewTodoExecute(username:string, todoid:number, todo:Todo){
    return this.http.post(`${JPA_API_URL}/user/${username}/todos`, todo)
  }
    

}
