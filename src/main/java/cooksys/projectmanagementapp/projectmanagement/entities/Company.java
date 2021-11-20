package cooksys.projectmanagementapp.projectmanagement.entities;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Company {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String description;

    @OneToMany(mappedBy = "company")
    private List<User> companyUsers;

    @OneToMany(mappedBy = "teamCompany")
    private List<Team> companyTeams;

}
