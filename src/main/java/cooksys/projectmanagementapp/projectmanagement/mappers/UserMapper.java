package cooksys.projectmanagementapp.projectmanagement.mappers;

import java.util.List;

import cooksys.projectmanagementapp.projectmanagement.dtos.UserRequestDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.UserResponseDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;


import org.mapstruct.*;

@Mapper(componentModel = "spring", uses = { CredentialsMapper.class })
public interface UserMapper {

    User requestDtoToEntity(UserRequestDto userRequestDto);

    @Mapping(target = "username", source = "credentials.username")
    UserResponseDto entityToResponseDto(User user);

    List<UserResponseDto> entitiesToResponseDtos(List<User> users);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "credentials", ignore = true)
    void updateUserFromDto(UserRequestDto userRequestDto,
                            @MappingTarget User userEntity);

}