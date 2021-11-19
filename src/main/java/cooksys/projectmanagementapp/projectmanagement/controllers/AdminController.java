package cooksys.projectmanagementapp.projectmanagement.controllers;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserRequestDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.services.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/users")
public class AdminController {
    private final AdminService adminService;

    @GetMapping
    public List<UserResponseDto> getAllUsers() {
        return adminService.getAllUsers();
    }

    @GetMapping("/{username}")
    public UserResponseDto getAdminUser(@PathVariable String username) {
        return adminService.getAdminUser(username);
    }

    @ResponseStatus(code = HttpStatus.OK)
    @PatchMapping("/{username}")
    public UserResponseDto patchUser(@PathVariable String username,
                                     @RequestBody UserRequestDto userRequestDto) {
        return adminService.updateUser(username, userRequestDto);
    }

}