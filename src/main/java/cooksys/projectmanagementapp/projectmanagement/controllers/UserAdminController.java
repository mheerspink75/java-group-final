package cooksys.projectmanagementapp.projectmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.services.ProjectService;
import cooksys.projectmanagementapp.projectmanagement.services.UserService;
import cooksys.projectmanagementapp.projectmanagement.entities.Project;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotFoundException;
import cooksys.projectmanagementapp.projectmanagement.mappers.ProjectMapper;
import cooksys.projectmanagementapp.projectmanagement.repositories.ProjectRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(onConstructor_=@Autowired)
@RequestMapping("/admin/users")
@RestController
public class UserAdminController {

    private final UserService userService;

    @DeleteMapping("/{username}")
    public UserResponseDto deleteUser(@PathVariable String username) {
        return userService.deleteUser(username);
    } 
	
}