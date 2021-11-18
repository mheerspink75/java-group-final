package cooksys.projectmanagementapp.projectmanagement.services;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;

import java.util.List;

public interface UserService {

    UserResponseDto getUser(String username);

    List<UserResponseDto> getAllUsers();
    
    UserResponseDto deleteUser(String username);
}
