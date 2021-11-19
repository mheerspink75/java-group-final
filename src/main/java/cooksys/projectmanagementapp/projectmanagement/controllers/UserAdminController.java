package cooksys.projectmanagementapp.projectmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserRequestDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.services.UserService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(onConstructor_=@Autowired)
@RequestMapping("/admin/users")
@RestController
public class UserAdminController {

    private final UserService userService;

    @PostMapping
    public UserResponseDto createUser(@RequestBody UserRequestDto userRequestDto) {
        return userService.createUser(userRequestDto);
    }

    @DeleteMapping("/{username}")
    public UserResponseDto deleteUser(@PathVariable String username) {
        return userService.deleteUser(username);
    } 
	
}