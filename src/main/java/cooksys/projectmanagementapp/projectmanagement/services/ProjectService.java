package cooksys.projectmanagementapp.projectmanagement.services;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;

import java.util.List;

public interface ProjectService {
	
	ProjectDto updateProject(ProjectDto projectDto, long id);
	
	ProjectDto getProject(long id);

	List<ProjectDto> getAllProjects();
}
