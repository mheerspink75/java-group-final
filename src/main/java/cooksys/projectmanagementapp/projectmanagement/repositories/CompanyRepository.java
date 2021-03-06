package cooksys.projectmanagementapp.projectmanagement.repositories;

import cooksys.projectmanagementapp.projectmanagement.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    
    List<Company> findAll();
}
