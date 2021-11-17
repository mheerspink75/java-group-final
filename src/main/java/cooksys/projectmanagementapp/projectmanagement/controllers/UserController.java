package cooksys.projectmanagementapp.projectmanagement.controllers;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<UserResponseDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public UserResponseDto getUser(@PathVariable String username) {
        return userService.getUser(username);
    }
}
