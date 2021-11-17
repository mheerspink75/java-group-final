package cooksys.projectmanagementapp.projectmanagement.services;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;

public interface ProjectService {
	ProjectDto updateProject(ProjectDto projectDto, long id);
}
