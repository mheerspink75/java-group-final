package cooksys.projectmanagementapp.projectmanagement.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Team {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String description;

    @OneToMany(mappedBy = "team")
    private List<User> users;

    @OneToMany(mappedBy = "projectTeam")
    private List<Project> projectTeams;

    @ManyToOne
    @JoinColumn
    private Company teamCompany;

}
