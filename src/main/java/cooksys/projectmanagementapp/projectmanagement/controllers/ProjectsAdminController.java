package cooksys.projectmanagementapp.projectmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;
import cooksys.projectmanagementapp.projectmanagement.services.ProjectService;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor(onConstructor_=@Autowired)
@RequestMapping("admin/projects")
@RestController
public class ProjectsAdminController {

	private final ProjectService projectService;
	@PatchMapping("/{id}")
	public ProjectDto projectUpdate(@RequestBody ProjectDto projectDto, 
		  @PathVariable("id") long projectId) {
		 return projectService.updateProject(projectDto, projectId);
	}

	@GetMapping()
	public List<ProjectDto> getAllProjects(){return projectService.getAllProjects();}

	@GetMapping("/{id}")
	public ProjectDto getProject(@PathVariable long id) {
		return projectService.getProject(id);
	}
	
}
