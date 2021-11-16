package cooksys.projectmanagementapp.projectmanagement.mappers;

import java.util.List;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserRequestDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = { CredentialsMapper.class, TeamMapper.class, ProjectMapper.class })

public interface UserMapper {

    User requestDtoToEntity(UserRequestDto userRequestDto);

//    @Mapping(target = "username", source = "credentials.username")
//    UserResponseDto entityToResponseDtos(List<User> users);
//
//    <Users> List<UserResponseDto> entitiesToResponseDtos(List<Users> users);

}
