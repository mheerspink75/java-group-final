package cooksys.projectmanagementapp.projectmanagement.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CompanyRequestDto {

    private CredentialsDto credentials;

    private CompanyDto company;

}
