package cooksys.projectmanagementapp.projectmanagement.dtos;

import java.sql.Timestamp;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserResponseDto {

    private String username;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private boolean isActive;

    private boolean isAdmin;

    private String status;

    private Timestamp joined;

    private TeamDto team;

    private CompanyDto company;

}
