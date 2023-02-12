package com.mahesh.rest.webservices.firstRestWebService.toDo;

import java.net.URI;
import java.util.List;

import javax.servlet.Servlet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class ToDoResourcesController {

	@Autowired
	public ToDoHardcodedService todoService;
	
	@GetMapping("/users/{username}/todolist")
	public List<ToDo> getAllToDo(){
		return ToDoHardcodedService.featchAllTodos();
	}
	
	@GetMapping("/user/{username}/todos/{todoid}")
	public ToDo getToDoById(@PathVariable String username, @PathVariable long todoid){
		return todoService.getTodoById(todoid);
	}
	
	// /user/{username}/todos/{todooid}
	@DeleteMapping("/user/{username}/todos/{todoid}")
	public ResponseEntity<Void> deleteToDo(@PathVariable String username, @PathVariable long todoid)
	{
		ToDo todo= todoService.deleteById(username, todoid);
		if (todo != null)
			return ResponseEntity.noContent().build();
		
		return ResponseEntity.notFound().build(); 
	}
	
	@PutMapping("/user/{username}/todos/{todoid}")
	public ResponseEntity<ToDo> deleteToDo(@PathVariable String username, @PathVariable long todoid,
											@RequestBody ToDo todo)
	{
		ToDo todoUpdated= todoService.saveTodo(todo);
		
		return new ResponseEntity<ToDo>(todo, HttpStatus.OK); 
	}
	
	@PostMapping("/user/{username}/todos")
	public ResponseEntity<Void> updateToDo(@PathVariable String username, @RequestBody ToDo todo)
	{
	ToDo todoCreated= todoService.saveTodo(todo);
	
	
	URI uri= ServletUriComponentsBuilder.fromCurrentRequest()
			.path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
	return ResponseEntity.created(uri).build();
	}
	
}
