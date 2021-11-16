package cooksys.projectmanagementapp.projectmanagement.dtos;

import java.sql.Timestamp;

import cooksys.projectmanagementapp.projectmanagement.entities.Company;
import cooksys.projectmanagementapp.projectmanagement.entities.Team;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Data
public class UserResponseDto {

    private CredentialsDto credentials;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private boolean isActive;

    private boolean isAdmin;

    private String status;

    private Timestamp joined;

    private Team team;

    private Company company;
}
