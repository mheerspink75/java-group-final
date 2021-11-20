package cooksys.projectmanagementapp.projectmanagement.mappers;

import cooksys.projectmanagementapp.projectmanagement.dtos.TeamDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Team;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TeamMapper {

    Team requestDtoToEntity(TeamDto teamDto);

    TeamDto entityToResponseDto(Team team);

    List<TeamDto> entitiesToResponseDtos(List<Team> teams);
    
    @BeanMapping(nullValueCheckStrategy=NullValueCheckStrategy.ALWAYS, 
			nullValuePropertyMappingStrategy=NullValuePropertyMappingStrategy.IGNORE)
    void updateTeam(@MappingTarget Team oldTeam, Team newTeam);

}