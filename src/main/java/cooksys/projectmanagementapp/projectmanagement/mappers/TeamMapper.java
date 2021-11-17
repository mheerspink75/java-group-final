package cooksys.projectmanagementapp.projectmanagement.mappers;

import cooksys.projectmanagementapp.projectmanagement.dtos.TeamDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Team;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TeamMapper {

    Team requestDtoToEntity(TeamDto teamDto);

    TeamDto entityToResponseDto(Team team);

    List<TeamDto> entitiesToResponseDtos(List<Team> teams);

}