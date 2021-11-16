package cooksys.projectmanagementapp.projectmanagement.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@NoArgsConstructor
@Data
public class UserRequestDto {

    private CredentialsDto credentials;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private boolean isActive;

    private boolean isAdmin;

    private String status;

}
