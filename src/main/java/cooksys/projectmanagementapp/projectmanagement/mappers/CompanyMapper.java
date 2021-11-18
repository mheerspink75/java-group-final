package cooksys.projectmanagementapp.projectmanagement.mappers;

import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Company;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CompanyMapper {

    Company requestToEntityDto(CompanyDto companyDto);

    CompanyDto entityToResponseDto(Company company);

    List<CompanyDto> entitiesToResponseDto(List<Company> companies);

}
