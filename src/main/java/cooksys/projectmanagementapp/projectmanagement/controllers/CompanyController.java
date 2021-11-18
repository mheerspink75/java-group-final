package cooksys.projectmanagementapp.projectmanagement.controllers;


import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyDto;
import cooksys.projectmanagementapp.projectmanagement.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class CompanyController {

    private  final CompanyService companyService;

    @GetMapping("/companies")
    public List<CompanyDto> getAllCompanies() {
        return companyService.getAllCompanies();
    }
}
