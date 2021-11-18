package cooksys.projectmanagementapp.projectmanagement.services;


import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyDto;

import java.util.List;

public interface CompanyService {
    List<CompanyDto> getAllCompanies();
}
