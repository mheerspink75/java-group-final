package cooksys.projectmanagementapp.projectmanagement.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Data
@Table
public class Project {

    @Id
    @GeneratedValue
    private long id;

    private String name;

    private String description;

    private boolean isActive;

    @ManyToOne
    @JoinColumn
    private Team projectTeam;

}