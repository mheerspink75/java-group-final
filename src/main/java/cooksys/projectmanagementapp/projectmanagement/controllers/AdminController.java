package cooksys.projectmanagementapp.projectmanagement.controllers;

import cooksys.projectmanagementapp.projectmanagement.dtos.CredentialsDto;
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
@CrossOrigin(origins = "*")
public class AdminController {
    private final AdminService adminService;

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<UserResponseDto> getAllUsers() {
        return adminService.getAllUsers();
    }

    @GetMapping("/{username}")
    @ResponseStatus(code = HttpStatus.OK)
    public UserResponseDto getAdminUser(@PathVariable String username) {
        return adminService.getAdminUser(username);
    }

    @PatchMapping("/{username}")
    @ResponseStatus(code = HttpStatus.OK)
    public UserResponseDto patchUser(@PathVariable String username,
                                     @RequestBody UserRequestDto userRequestDto) {
        return adminService.updateUser(username, userRequestDto);
    }

    @PatchMapping("/usernamePassword/{username}")
    public CredentialsDto patchUsernamePassword (@PathVariable String username, @RequestBody CredentialsDto newCredentialsDto) {
        return adminService.patchUsernamePassword(username, newCredentialsDto );
    }

}
