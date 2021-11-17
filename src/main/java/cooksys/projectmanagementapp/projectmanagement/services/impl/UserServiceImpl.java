package cooksys.projectmanagementapp.projectmanagement.services.impl;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;
import cooksys.projectmanagementapp.projectmanagement.exceptions.BadRequestException;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotFoundException;
import cooksys.projectmanagementapp.projectmanagement.mappers.UserMapper;
import cooksys.projectmanagementapp.projectmanagement.services.UserService;
import cooksys.projectmanagementapp.projectmanagement.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final UserMapper userMapper;


    public UserResponseDto validateUsername(String username, String message) {
        User user =
                userRepository.findByCredentialsUsername(username).orElseThrow( () -> new NotFoundException(message));

        if (!user.isActive()) {
            throw new BadRequestException("User is Inactive");
        }

        return userMapper.entityToResponseDto(user);
    }

    @Override
    public UserResponseDto getUser(String username) {
        return validateUsername(username, "User Not Found");
    }

    @Override
    public List<UserResponseDto> getAllUsers() {
        return userMapper.entitiesToResponseDtos(userRepository.findAll());
    }
}
