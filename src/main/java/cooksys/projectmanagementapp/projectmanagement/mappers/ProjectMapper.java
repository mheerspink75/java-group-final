package cooksys.projectmanagementapp.projectmanagement.mappers;


import java.util.List;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.springframework.beans.factory.annotation.Autowired;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Project;
import cooksys.projectmanagementapp.projectmanagement.repositories.TeamRepository;


@Mapper(componentModel="spring")
public abstract class ProjectMapper {
	@Autowired
	protected TeamRepository teamRepository;
	@Mapping(target="projectTeam", expression="java(teamRepository"
			+ ".findById(projectDto.getId())"
			+ ".orElse(null))")
	public abstract Project requestToEntity(ProjectDto projectDto);
	@Mapping(target="teamId", source="project.projectTeam.id")
	public abstract ProjectDto entityToResponseDto(Project project);
	@BeanMapping(nullValueCheckStrategy=NullValueCheckStrategy.ALWAYS, 
			nullValuePropertyMappingStrategy=NullValuePropertyMappingStrategy.IGNORE)
	public abstract void update(Project update, @MappingTarget Project existingProj);
	public abstract List<ProjectDto> entitiesToResponseDtos(List<Project> projects);
}
