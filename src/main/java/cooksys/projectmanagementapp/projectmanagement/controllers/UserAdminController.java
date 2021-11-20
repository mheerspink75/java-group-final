package cooksys.projectmanagementapp.projectmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserRequestDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.services.UserService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(onConstructor_=@Autowired)
@RequestMapping("/admin/users")
@RestController
@CrossOrigin(origins = "*")
public class UserAdminController {

    private final UserService userService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public UserResponseDto createUser(@RequestBody UserRequestDto userRequestDto) {
        return userService.createUser(userRequestDto);
    }

    @DeleteMapping("/{username}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public UserResponseDto deleteUser(@PathVariable String username) {
        return userService.deleteUser(username);
    } 
	
}