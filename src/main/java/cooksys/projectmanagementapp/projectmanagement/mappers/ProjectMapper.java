package cooksys.projectmanagementapp.projectmanagement.mappers;

import cooksys.projectmanagementapp.projectmanagement.dtos.ProjectDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Project;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

    Project requestToEntity(ProjectDto projectDto);

    ProjectDto entityToResponseDto(Project project);

    List<ProjectDto> entitiesToResponseDtos(List<Project> projects);

}
