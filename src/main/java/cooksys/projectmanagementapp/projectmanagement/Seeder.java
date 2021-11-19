package cooksys.projectmanagementapp.projectmanagement;

import cooksys.projectmanagementapp.projectmanagement.entities.*;
import cooksys.projectmanagementapp.projectmanagement.repositories.CompanyRepository;
import cooksys.projectmanagementapp.projectmanagement.repositories.ProjectRepository;
import cooksys.projectmanagementapp.projectmanagement.repositories.TeamRepository;
import cooksys.projectmanagementapp.projectmanagement.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;



@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final ProjectRepository projectRepository;
    private final CompanyRepository companyRepository;

    @Override
    public void run(String... args) throws Exception {

//        Company 1
        Company company_1 = new Company();
        company_1.setName("CookSys One");
        company_1.setDescription("Description of CookSys One");
        companyRepository.saveAndFlush(company_1);


//        Company 2
        Company company_2 = new Company();
        company_2.setName("CookSys Two");
        company_2.setDescription("Description of CookSys Two");
        companyRepository.saveAndFlush(company_2);

//        Company 3
        Company company_3 = new Company();
        company_3.setName("CookSys Three");
        company_3.setDescription("Description of CookSys Three");
        companyRepository.saveAndFlush(company_3);


//        Team 1
        Team team_1 = new Team();
        team_1.setName("Team One");
        team_1.setDescription("Description of Team one");
        team_1.setTeamCompany(company_1);
        teamRepository.saveAndFlush(team_1);

//        Team 2
        Team team_2 = new Team();
        team_2.setName("Team Two");
        team_2.setDescription("Description of Team Two");
        team_2.setTeamCompany(company_1);
        teamRepository.saveAndFlush(team_2);

//        Team 3
        Team team_3 = new Team();
        team_3.setName("Team Three");
        team_3.setDescription("Description of Team Three");
        team_3.setTeamCompany(company_1);
        teamRepository.saveAndFlush(team_3);

//        List<Team> comp_1_teams = Arrays.asList(team_1, team_2, team_3);
//        company_1.setCompanyTeams(comp_1_teams);
//        companyRepository.saveAndFlush(company_1);


//        Project 1
        Project project_1 = new Project();
        project_1.setName("Project One");
        project_1.setDescription("Description for Project One");
        project_1.setProjectTeam(team_1);
        projectRepository.saveAndFlush(project_1);

//        Project 2
        Project project_2 = new Project();
        project_2.setName("Project Two");
        project_2.setDescription("Description for Project Two");
        project_2.setProjectTeam(team_1);
        projectRepository.saveAndFlush(project_2);

//        Project 3
        Project project_3 = new Project();
        project_3.setName("Project Three");
        project_3.setDescription("Description for Project Three");
        project_3.setProjectTeam(team_2);
        projectRepository.saveAndFlush(project_3);

//        Project 4
        Project project_4 = new Project();
        project_4.setName("Project Four");
        project_4.setDescription("Description for Project Four");
        project_4.setProjectTeam(team_2);
        projectRepository.saveAndFlush(project_4);

//        Project 5
        Project project_5 = new Project();
        project_5.setName("Project Five");
        project_5.setDescription("Description for Project Five");
        project_5.setProjectTeam(team_3);
        projectRepository.saveAndFlush(project_5);

//        Project 6
        Project project_6 = new Project();
        project_6.setName("Project Six");
        project_6.setDescription("Description for Project Six");
        project_6.setProjectTeam(team_3);
        projectRepository.saveAndFlush(project_6);

//        Project 7
        Project project_7 = new Project();
        project_7.setName("Project Seven");
        project_7.setDescription("Description for Project Seven");
        project_7.setProjectTeam(team_1);
        projectRepository.saveAndFlush(project_7);

//        Project 8
        Project project_8 = new Project();
        project_8.setName("Project Eight");
        project_8.setDescription("Description for Project Eight");
        project_8.setProjectTeam(team_2);
        projectRepository.saveAndFlush(project_8);

//        Project 9
        Project project_9 = new Project();
        project_9.setName("Project Nine");
        project_9.setDescription("Description for Project Nine");
        project_9.setProjectTeam(team_3);
        projectRepository.saveAndFlush(project_9);


//        ADMIN CRED
        Credentials admin_cred = new Credentials();
        admin_cred.setUsername("Admin");
        admin_cred.setPassword("Pass");
//        ADMIN
        User admin = new User();
        admin.setCredentials(admin_cred);
        admin.setFirstName("AdminGuy");
        admin.setLastName("SuperUser");
        admin.setEmail("admin@email.com");
        admin.setActive(true);
        admin.setAdmin(true);
        admin.setStatus("Joined");
        admin.setCompany(company_1);
//        admin.setTeam(team_1);
        userRepository.saveAndFlush(admin);


//        CRED_1
        Credentials cred_1 = new Credentials();
        cred_1.setUsername("User1");
        cred_1.setPassword("Pass");
//        USER_1
        User user_1 = new User();
        user_1.setCredentials(cred_1);
        user_1.setFirstName("User");
        user_1.setLastName("One");
        user_1.setEmail("user1@email.com");
        user_1.setActive(true);
        user_1.setAdmin(false);
        user_1.setStatus("Joined");
        user_1.setTeam(team_1);
        user_1.setCompany(company_1);
        userRepository.saveAndFlush(user_1);

//        CRED_2
        Credentials cred_2 = new Credentials();
        cred_2.setUsername("User2");
        cred_2.setPassword("Pass");
//        USER_2
        User user_2 = new User();
        user_2.setCredentials(cred_2);
        user_2.setFirstName("User");
        user_2.setLastName("One");
        user_2.setEmail("user2@email.com");
        user_2.setActive(true);
        user_2.setAdmin(false);
        user_2.setStatus("Joined");
        user_2.setTeam(team_1);
        user_2.setCompany(company_1);
        userRepository.saveAndFlush(user_2);

//        CRED_3
        Credentials cred_3 = new Credentials();
        cred_3.setUsername("User3");
        cred_3.setPassword("Pass");
//        USER_3
        User user_3 = new User();
        user_3.setCredentials(cred_3);
        user_3.setFirstName("User");
        user_3.setLastName("One");
        user_3.setEmail("user3@email.com");
        user_3.setActive(true);
        user_3.setAdmin(false);
        user_3.setStatus("Joined");
        user_3.setCompany(company_1);
        user_3.setTeam(team_1);
//        user_3.setCompany(company_1);
//        user_3.getCompany().

        userRepository.saveAndFlush(user_3);

//        CRED_4
        Credentials cred_4 = new Credentials();
        cred_4.setUsername("User4");
        cred_4.setPassword("Pass");
//        USER_4
        User user_4 = new User();
        user_4.setCredentials(cred_4);
        user_4.setFirstName("User");
        user_4.setLastName("One");
        user_4.setEmail("user4@email.com");
        user_4.setActive(true);
        user_4.setAdmin(false);
        user_4.setStatus("Joined");
        user_4.setTeam(team_2);
        user_4.setCompany(company_1);
        userRepository.saveAndFlush(user_4);

//        CRED_5
        Credentials cred_5 = new Credentials();
        cred_5.setUsername("User5");
        cred_5.setPassword("Pass");
//        USER_5
        User user_5 = new User();
        user_5.setCredentials(cred_5);
        user_5.setFirstName("User");
        user_5.setLastName("One");
        user_5.setEmail("user5@email.com");
        user_5.setActive(true);
        user_5.setAdmin(false);
        user_5.setStatus("Joined");
        user_5.setTeam(team_2);
        user_5.setCompany(company_1);
        userRepository.saveAndFlush(user_5);

//        CRED_6
        Credentials cred_6 = new Credentials();
        cred_6.setUsername("User6");
        cred_6.setPassword("Pass");
//        USER_6
        User user_6 = new User();
        user_6.setCredentials(cred_6);
        user_6.setFirstName("User");
        user_6.setLastName("One");
        user_6.setEmail("user6@email.com");
        user_6.setActive(true);
        user_6.setAdmin(false);
        user_6.setStatus("Joined");
        user_6.setTeam(team_2);
        user_6.setCompany(company_1);
        userRepository.saveAndFlush(user_6);

//        CRED_7
        Credentials cred_7 = new Credentials();
        cred_7.setUsername("User7");
        cred_7.setPassword("Pass");
//        USER_7
        User user_7 = new User();
        user_7.setCredentials(cred_7);
        user_7.setFirstName("User");
        user_7.setLastName("One");
        user_7.setEmail("user7@email.com");
        user_7.setActive(true);
        user_7.setAdmin(false);
        user_7.setStatus("Joined");
        user_7.setTeam(team_3);
        user_7.setCompany(company_1);
        userRepository.saveAndFlush(user_7);

//        CRED_8
        Credentials cred_8 = new Credentials();
        cred_8.setUsername("User8");
        cred_8.setPassword("Pass");
//        USER_8
        User user_8 = new User();
        user_8.setCredentials(cred_8);
        user_8.setFirstName("User");
        user_8.setLastName("One");
        user_8.setEmail("user8@email.com");
        user_8.setActive(true);
        user_8.setAdmin(false);
        user_8.setStatus("Joined");
        user_8.setTeam(team_3);
        user_8.setCompany(company_1);
        userRepository.saveAndFlush(user_8);

//        CRED_9
        Credentials cred_9 = new Credentials();
        cred_9.setUsername("User9");
        cred_9.setPassword("Pass");
//        USER_9
        User user_9 = new User();
        user_9.setCredentials(cred_9);
        user_9.setFirstName("User");
        user_9.setLastName("One");
        user_9.setEmail("user9@email.com");
        user_9.setActive(true);
        user_9.setAdmin(false);
        user_9.setStatus("Joined");
        user_9.setTeam(team_3);
        user_9.setCompany(company_1);
        userRepository.saveAndFlush(user_9);
    }
}
