package cooksys.projectmanagementapp.projectmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Project;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotFoundException;
import cooksys.projectmanagementapp.projectmanagement.mappers.ProjectMapper;
import cooksys.projectmanagementapp.projectmanagement.repositories.ProjectRepository;
import cooksys.projectmanagementapp.projectmanagement.services.ProjectService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(onConstructor_=@Autowired)
@RequestMapping("/api/admin")
@RestController
public class ProjectsAdminController {

	private final ProjectService projectService;
	@PatchMapping("/projects/{id}")
	public ProjectDto projectUpdate(@RequestBody ProjectDto projectDto, 
		  @PathVariable("id") long projectId) {
		 return projectService.updateProject(projectDto, projectId);
	}
	
}
