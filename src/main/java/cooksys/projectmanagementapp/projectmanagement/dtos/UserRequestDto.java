package cooksys.projectmanagementapp.projectmanagement.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserRequestDto {

//    private long id;

    private CredentialsDto credentials;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private boolean isActive;

    private boolean isAdmin;

    private String status;

    private TeamDto team;

    private CompanyDto company;

}
