package cooksys.projectmanagementapp.projectmanagement.services;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.TeamDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.TeamRequestDto;

import java.util.List;

public interface TeamService {

    TeamDto updateTeam(long id, TeamRequestDto teamDto);

    List<TeamDto> getAdminTeams();

    TeamDto getAdminTeamById(long id);
    
    TeamDto addUser(long teamId, long userId);
}
