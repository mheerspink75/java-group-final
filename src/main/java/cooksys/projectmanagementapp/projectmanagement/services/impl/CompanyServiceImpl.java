package cooksys.projectmanagementapp.projectmanagement.services.impl;

import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyDto;
import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyRequestDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Company;
import cooksys.projectmanagementapp.projectmanagement.exceptions.BadRequestException;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotFoundException;
import cooksys.projectmanagementapp.projectmanagement.mappers.CompanyMapper;
import cooksys.projectmanagementapp.projectmanagement.repositories.CompanyRepository;
import cooksys.projectmanagementapp.projectmanagement.services.AuthService;
import cooksys.projectmanagementapp.projectmanagement.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;
    private final CompanyMapper companyMapper;
    private final AuthService authService;

    /**
     * Checks if company exists by id, else throws NotFoundException
     * @param id long
     * @param message String
     * @return Company
     */
    private Company validateCompany(long id, String message) {

        return companyRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(message));
    }

    /**
     * Finds a company by id returns CompanyDto
     * @param id long
     * @return CompanyDto
     */
    @Override
    public CompanyDto getCompany(long id) {
        return companyMapper.entityToResponseDto(validateCompany(id, "Company Not " +
                "Found"));
    }

    @Override
    public List<CompanyDto> getAllCompanies() {

        return companyMapper.entitiesToResponseDto(companyRepository.findAll());
    }

    /**
     * Update company information
     *  - Updates company if user is admin and the company id matches users'
     *  company id;
     * @param id long
     * @param companyRequestDto CompanyRequestDto
     * @return CompanyDto
     */
    @Override
    public CompanyDto patchCompany(long id, CompanyRequestDto companyRequestDto) {

        final var user = authService.authenticate(companyRequestDto.getCredentials());

        if (user.isAdmin() && user.getCompany().getId().equals(id)) {

            var userCompany =
                    companyRepository.findById(user.getCompany().getId()).orElseThrow(() -> new NotFoundException("Company Not Found"));

            userCompany.setName(companyRequestDto.getCompany().getName());
            userCompany.setDescription(companyRequestDto.getCompany().getDescription());

            companyRepository.saveAndFlush(userCompany);

            return companyMapper.entityToResponseDto(userCompany);
        }

        throw new BadRequestException("User doesn't belong to this Company or isn't an " +
                "Admin");
    }

}
