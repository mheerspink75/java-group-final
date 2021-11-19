package cooksys.projectmanagementapp.projectmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;
import cooksys.projectmanagementapp.projectmanagement.services.ProjectService;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequiredArgsConstructor(onConstructor_=@Autowired)
@RequestMapping("admin/projects")
@CrossOrigin(origins = "*")
public class ProjectsAdminController {

	private final ProjectService projectService;

	@PatchMapping("/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public ProjectDto projectUpdate(@RequestBody ProjectDto projectDto, 
		  @PathVariable("id") long projectId) {
		 return projectService.updateProject(projectDto, projectId);
	}

	@GetMapping()
	@ResponseStatus(code = HttpStatus.OK)
	public List<ProjectDto> getAllProjects(){return projectService.getAllProjects();}

	@GetMapping("/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public ProjectDto getProject(@PathVariable long id) {
		return projectService.getProject(id);
	}
	
}
