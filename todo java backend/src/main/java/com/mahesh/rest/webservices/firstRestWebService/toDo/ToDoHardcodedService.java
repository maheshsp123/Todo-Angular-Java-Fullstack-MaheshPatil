package com.mahesh.rest.webservices.firstRestWebService.toDo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ToDoHardcodedService {
	private static List<ToDo> todoList= new ArrayList<>();
	private static long counter=0;
	static {
		todoList.add( new ToDo(++counter,"mahesh" , "angular", new Date(), false));
		todoList.add( new ToDo(++counter,"mahesh" , "spring", new Date(), false));
		todoList.add( new ToDo(++counter,"mahesh" , "springBoot", new Date(), false));
		todoList.add( new ToDo(++counter,"mahesh" , "RestFull", new Date(), false));
		
		todoList.add( new ToDo(++counter,"ramesh" , "csharp", new Date(), false));
		todoList.add( new ToDo(++counter,"ramesh" , "WPF", new Date(), false));
		
		todoList.add( new ToDo(++counter,"suresh" , "android", new Date(), false));
		todoList.add( new ToDo(++counter,"suresh" , "flask", new Date(), false)); 
	}
	
	public static List<ToDo> featchAllTodos(){
		return todoList;
	}

	public ToDo deleteById(String userid, long todoid) {
		ToDo todo= searchToDoById( todoid);
		if (todo != null) {
			todoList.remove(todo);
			return todo;
		}
			
		
		return null;
		
	}
	private ToDo searchToDoById(long todoid) {
		for( ToDo todo:todoList) {
			if(todo.getId() == todoid)
				return todo;
		}
		
		return null;
	}

	public ToDo getTodoById(long todoid) {
		
		return searchToDoById(todoid);
	}
	
	public ToDo saveTodo(ToDo todo) {
		if(todo.getId() <= 0 ) {
			todo.setId(++counter);
			todoList.add(todo);
		}
		else {
			deleteById(null, todo.getId());
			todoList.add(todo);
		}
		return todo;
			
	}
	
}
