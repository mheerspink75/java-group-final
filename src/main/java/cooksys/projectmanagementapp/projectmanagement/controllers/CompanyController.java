package cooksys.projectmanagementapp.projectmanagement.controllers;

import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyRequestDto;
import cooksys.projectmanagementapp.projectmanagement.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/companies")
public class CompanyController {

    private final CompanyService companyService;

    @ResponseStatus(code = HttpStatus.OK)
    @GetMapping("/{id}")
    public CompanyDto getCompany(@PathVariable long id) {
        return companyService.getCompany(id);
    }

    @ResponseStatus(code = HttpStatus.OK)
    @PatchMapping("/{id}")
    public CompanyDto patchCompany(@PathVariable long id,
                                   @RequestBody CompanyRequestDto companyRequestDto) {
        return companyService.patchCompany(id, companyRequestDto);
    }


    @ResponseStatus(code = HttpStatus.OK)
    @GetMapping
    public List<CompanyDto> getAllCompanies() {
        return companyService.getAllCompanies();
    }
}