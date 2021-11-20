package cooksys.projectmanagementapp.projectmanagement.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class TeamRequestDto {

    private CredentialsDto credentials;

    private TeamDto team;

}