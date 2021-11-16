package cooksys.projectmanagementapp.projectmanagement.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Data
public class UserRequestDto {

    private long id;

    private CredentialsDto credentials;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private boolean isActive;

    private boolean isAdmin;

    private String status;

    private long teamId;

    private long companyId;

}
