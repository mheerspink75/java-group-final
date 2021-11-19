package cooksys.projectmanagementapp.projectmanagement.services.impl;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserRequestDto;
import cooksys.projectmanagementapp.projectmanagement.services.AdminService;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;
import cooksys.projectmanagementapp.projectmanagement.exceptions.BadRequestException;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotFoundException;
import cooksys.projectmanagementapp.projectmanagement.mappers.UserMapper;
import cooksys.projectmanagementapp.projectmanagement.repositories.UserRepository;
import cooksys.projectmanagementapp.projectmanagement.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final AuthService authService;

    private UserResponseDto validateUsername(String username, String message) {

        User user = userRepository.findByCredentialsUsername(username).orElseThrow(() -> new NotFoundException(message));

        if (!user.isAdmin()) {
            throw new BadRequestException("User is not Admin!");
        }

        return userMapper.entityToResponseDto(user);
    }

    @Override
    public UserResponseDto getAdminUser(String username) {
        return validateUsername(username, "User Not Found");
    }

    @Override
    public List<UserResponseDto> getAllUsers() {

        return userMapper.entitiesToResponseDtos(userRepository.findAll());
    }

    @Override
    public UserResponseDto updateUser(String username, UserRequestDto userRequestDto) {

        final var user = authService.authenticate(userRequestDto.getCredentials());

        var userToUpdate =
                userRepository.findByCredentialsUsername(username).orElseThrow(() -> new NotFoundException("User Not found"));

        if (user.isAdmin()) {
        userMapper.updateUserFromDto(userRequestDto, userToUpdate);
        userRepository.saveAndFlush(userToUpdate);
        }

        return userMapper.entityToResponseDto(userToUpdate);
    }
}