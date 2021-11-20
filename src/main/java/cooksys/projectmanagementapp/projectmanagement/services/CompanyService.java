package cooksys.projectmanagementapp.projectmanagement.services;

import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyRequestDto;
import java.util.List;

public interface CompanyService {
    CompanyDto getCompany(long id);

    List<CompanyDto> getAllCompanies();

    CompanyDto patchCompany(long id, CompanyRequestDto companyRequestDto);

}


