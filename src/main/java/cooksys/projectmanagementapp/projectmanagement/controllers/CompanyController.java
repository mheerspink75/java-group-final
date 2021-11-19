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
@CrossOrigin(origins = "*")
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public CompanyDto getCompany(@PathVariable long id) {
        return companyService.getCompany(id);
    }

    @PatchMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public CompanyDto patchCompany(@PathVariable long id,
                                   @RequestBody CompanyRequestDto companyRequestDto) {
        return companyService.patchCompany(id, companyRequestDto);
    }


    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<CompanyDto> getAllCompanies() {
        return companyService.getAllCompanies();
    }
}