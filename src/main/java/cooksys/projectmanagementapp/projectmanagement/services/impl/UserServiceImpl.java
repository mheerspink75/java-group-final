package cooksys.projectmanagementapp.projectmanagement.services.impl;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotFoundException;
import cooksys.projectmanagementapp.projectmanagement.mappers.UserMapper;
import cooksys.projectmanagementapp.projectmanagement.services.UserService;
import cooksys.projectmanagementapp.projectmanagement.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public User getUserByUsername(String username){
        Optional<User> user = userRepository.findByCredentialsUsername(username);
        if (user.isEmpty()){
            throw new NotFoundException("No User Found.");
        }
        return user.get();
    }

    @Override
    public UserResponseDto getUser(String username) {
        return userMapper.entityToResponseDto(getUserByUsername(username));
    }
}
