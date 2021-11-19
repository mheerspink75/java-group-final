package cooksys.projectmanagementapp.projectmanagement.mappers;

import cooksys.projectmanagementapp.projectmanagement.dtos.CompanyDto;
import cooksys.projectmanagementapp.projectmanagement.entities.Company;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CompanyMapper {

    Company requestToEntityDto(CompanyDto companyDto);

    CompanyDto entityToResponseDto(Company company);

    List<CompanyDto> entitiesToResponseDto(List<Company> companies);
    
    @BeanMapping(nullValueCheckStrategy=NullValueCheckStrategy.ALWAYS, 
			nullValuePropertyMappingStrategy=NullValuePropertyMappingStrategy.IGNORE)
    void patchCompany(Company newCompany, @MappingTarget Company oldCompany);

}
