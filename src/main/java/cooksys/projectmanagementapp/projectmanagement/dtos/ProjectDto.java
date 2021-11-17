package cooksys.projectmanagementapp.projectmanagement.dtos;

import lombok.NoArgsConstructor;
import lombok.Data;

@Data
@NoArgsConstructor
public class ProjectDto {

	private long id;

    private String name;

    private String description;

    private long teamId;

}
