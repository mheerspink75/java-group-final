package cooksys.projectmanagementapp.projectmanagement.services;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;

import java.util.List;

public interface AdminService {

    UserResponseDto getAdminUser(String username);

    List<UserResponseDto> getAllUsers();

}