package cooksys.projectmanagementapp.projectmanagement.controllers;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import cooksys.projectmanagementapp.projectmanagement.services.AuthService;
import cooksys.projectmanagementapp.projectmanagement.dtos.CredentialsDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.mappers.UserMapper;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    private final AuthService authService;
    private final UserMapper userMapper;

    @PostMapping("/login")
    public UserResponseDto login(@RequestBody CredentialsDto credentials) {
        final var user = authService.authenticate(credentials);
        return userMapper.entityToResponseDto(user);
    }
}
