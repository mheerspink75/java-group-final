package cooksys.projectmanagementapp.projectmanagement.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TeamDto {

    private long id;

    private String name;

    private String description;

    private long companyId;

}
