package cooksys.projectmanagementapp.projectmanagement.services.impl;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Project;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotFoundException;
import cooksys.projectmanagementapp.projectmanagement.mappers.ProjectMapper;
import cooksys.projectmanagementapp.projectmanagement.repositories.ProjectRepository;
import cooksys.projectmanagementapp.projectmanagement.services.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
	
	private final ProjectRepository projectRepository;
	private final ProjectMapper projectMapper;
	@Override
	public ProjectDto updateProject(ProjectDto projectDto, long id) {
		projectDto.setId(id);
		Project oldProject = projectRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("No project with such id was found"));
		Project update = projectMapper.requestToEntity(projectDto);
		projectMapper.update(update, oldProject);
		return projectMapper.entityToResponseDto(projectRepository.save(oldProject));
	}
	

}
