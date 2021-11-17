package cooksys.projectmanagementapp.projectmanagement.services;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;

public interface UserService {

    UserResponseDto getUser(String username);
}
