package cooksys.projectmanagementapp.projectmanagement.controllers;

import cooksys.projectmanagementapp.projectmanagement.dtos.TeamDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.TeamRequestDto;
import cooksys.projectmanagementapp.projectmanagement.services.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/teams")
public class TeamController {
    private final TeamService teamService;

    @GetMapping()
    public List<TeamDto> getAdminTeams(){return teamService.getAdminTeams();}

    @ResponseStatus(code = HttpStatus.OK)
    @PatchMapping("/{id}")
    public TeamDto updateTeam(@PathVariable long id,
                              @RequestBody TeamRequestDto teamRequestDto) {
        return teamService.updateTeam(id, teamRequestDto);
    }

    @GetMapping("/{teamid}")
    public TeamDto getAdminTeamById(@PathVariable("teamid") long id){return teamService.getAdminTeamById(id);}

    @PatchMapping("/{teamId}/add")
    public TeamDto addUserToTeam(@PathVariable("teamId") long teamId, @RequestParam("userId") long userId) {
    	return teamService.addUser(teamId, userId);
    }
}