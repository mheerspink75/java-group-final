package cooksys.projectmanagementapp.projectmanagement.mappers;

import java.util.List;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserRequestDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = { CredentialsMapper.class })
public interface UserMapper {

    User requestDtoToEntity(UserRequestDto userRequestDto);

//    @Mapping(target = "credentials", source = "credentials")
    UserResponseDto entityToResponseDto(User user);

//    List<UserResponseDto> entitiesToResponseDtos(List<User> users);

}