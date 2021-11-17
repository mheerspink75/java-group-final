package cooksys.projectmanagementapp.projectmanagement.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Data;

@Getter
@Setter
@NoArgsConstructor
@Data
public class ProjectDto {

	private long id;

    private String name;

    private String description;

    private long teamId;

}
