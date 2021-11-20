package cooksys.projectmanagementapp.projectmanagement.mappers;

import cooksys.projectmanagementapp.projectmanagement.dtos.CredentialsDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Credentials;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CredentialsMapper {

    Credentials requestToEntity(CredentialsDto credentialsDto);

    CredentialsDto entityToResponseDto(Credentials credentials);

}
