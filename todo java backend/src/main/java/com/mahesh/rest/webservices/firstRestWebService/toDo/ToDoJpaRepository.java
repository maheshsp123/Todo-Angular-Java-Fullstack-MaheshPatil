package com.mahesh.rest.webservices.firstRestWebService.toDo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoJpaRepository extends JpaRepository<ToDo, Long>{
	List<ToDo> findByUsername(String username);

}
