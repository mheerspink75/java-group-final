package cooksys.projectmanagementapp.projectmanagement.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Table(name = "user-table")
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @Embedded
    private Credentials credentials;

    private String firstName;

    private String lastName;

    @Column(nullable = false)
    private String email;

    private String phoneNumber;

    @Column(nullable = false)
    private boolean isActive;

    @Column(nullable = false)
    private boolean isAdmin;

    private String status;

    private long team;

    @ManyToOne
    @JoinColumn
    private List<Team> teams;

    private long company;

    @ManyToOne
    @JoinColumn
    private List<Company> companies;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Timestamp joined;

}
