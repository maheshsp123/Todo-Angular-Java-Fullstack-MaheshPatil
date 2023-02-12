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
public class ToDoJPAResourcesController {

	@Autowired
	public ToDoHardcodedService todoService;
	
	@Autowired
	public ToDoJpaRepository todoJpaService;
	
	@GetMapping("/jpa/users/{username}/todolist")
	public List<ToDo> getAllToDo(@PathVariable String username){
		//return ToDoHardcodedService.featchAllTodos();
		return todoJpaService.findByUsername(username);
	}
	
	@GetMapping("/jpa/user/{username}/todos/{todoid}")
	public ToDo getToDoById(@PathVariable String username, @PathVariable long todoid){
		//return todoService.getTodoById(todoid);
		return todoJpaService.findById(todoid).get();
	}
	
	// /user/{username}/todos/{todooid}
	@DeleteMapping("/jpa/user/{username}/todos/{todoid}")
	public ResponseEntity<Void> deleteToDo(@PathVariable String username, @PathVariable long todoid)
	{
//		ToDo todo= todoService.deleteById(username, todoid);
		todoJpaService.deleteById(todoid);
//		if (todo != null)
//			return ResponseEntity.noContent().build();
//		
//		return ResponseEntity.notFound().build(); 
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/jpa/user/{username}/todos/{todoid}")
	public ResponseEntity<ToDo> deleteToDo(@PathVariable String username, @PathVariable long todoid,
											@RequestBody ToDo todo)
	{
//		ToDo todoUpdated= todoService.saveTodo(todo);
		ToDo todoUpdated= todoJpaService.save(todo);
		
		return new ResponseEntity<ToDo>(todo, HttpStatus.OK); 
	}
	
	@PostMapping("/jpa/user/{username}/todos")
	public ResponseEntity<Void> updateToDo(@PathVariable String username, @RequestBody ToDo todo)
	{
//		ToDo todoCreated= todoService.saveTodo(todo);
		ToDo todoCreated= todoJpaService.save(todo);
		
		URI uri= ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
}
