package cooksys.projectmanagementapp.projectmanagement.services.impl;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserRequestDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;
import cooksys.projectmanagementapp.projectmanagement.exceptions.BadRequestException;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotFoundException;
import cooksys.projectmanagementapp.projectmanagement.mappers.UserMapper;
import cooksys.projectmanagementapp.projectmanagement.services.AuthService;
import cooksys.projectmanagementapp.projectmanagement.services.UserService;
import cooksys.projectmanagementapp.projectmanagement.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    

    @Override
    public UserResponseDto createUser(UserRequestDto userRequestDto) {
    	User user = userMapper.requestDtoToEntity(userRequestDto);
    	if (user.getCredentials() == null || user.getCredentials()
    			.getUsername() == null || user.
    			getCredentials().getPassword() == null) {
    		throw new BadRequestException ("Missing credentials");
    	}
    	
    	if (user.getEmail() == null) {
    		throw new BadRequestException ("Missing email");
    	}
    	
    	if (user.getFirstName() == null) {
    		throw new BadRequestException ("Missing first name");
    	}
    	
    	if (user.getLastName() == null) {
    		throw new BadRequestException ("Missing last name");
    	}
    	
    	Optional<User> temp = userRepository.findByCredentialsUsername(user.getCredentials().getUsername());
    	if (temp.isPresent()) {
    		User dbUser = temp.get();
    		if (dbUser.isActive()) {
    			throw new BadRequestException("This user already exists");
    		} else {
    			dbUser.setActive(true);
    			userRepository.saveAndFlush(dbUser);
    			return userMapper.entityToResponseDto(dbUser);
    		}
    	} else {
    		userRepository.saveAndFlush(user);
    		return userMapper.entityToResponseDto(user);
    	}
    }
    

    public UserResponseDto deleteUser(String username) {
    	User user =
                userRepository.findByCredentialsUsername(username).orElseThrow( () -> new NotFoundException("User not found"));

        if (!user.isActive()) {
            throw new BadRequestException("User is Inactive");
        }
        user.setActive(false);
        userRepository.saveAndFlush(user);
        return userMapper.entityToResponseDto(user);
    }


}
