package cooksys.projectmanagementapp.projectmanagement.services.impl;


import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyDto;
import cooksys.projectmanagementapp.projectmanagement.mappers.CompanyMapper;
import cooksys.projectmanagementapp.projectmanagement.repositories.CompanyRepository;
import cooksys.projectmanagementapp.projectmanagement.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;
    private final CompanyMapper companyMapper;

    @Override
    public List<CompanyDto> getAllCompanies() {
        return companyMapper.entitiesToResponseDto(companyRepository.findAll());
    }
}
