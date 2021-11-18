package cooksys.projectmanagementapp.projectmanagement.controllers;


import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.services.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/users")
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/")
    public List<UserResponseDto> getAllUsers() {
        return adminService.getAllUsers();
    }

    @GetMapping("/{username}")
    public UserResponseDto getAdminUser(@PathVariable String username) {
        return adminService.getAdminUser(username);
    }

}