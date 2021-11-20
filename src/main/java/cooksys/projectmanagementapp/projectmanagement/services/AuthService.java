package cooksys.projectmanagementapp.projectmanagement.services;

import cooksys.projectmanagementapp.projectmanagement.dtos.CredentialsDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotAuthorizedException;

public interface AuthService {

    /**
     * Return a user, if correct credentials
     *
     * @param credentialsDto
     * @return User
     * @throws NotAuthorizedException
     */
    User authenticate(CredentialsDto credentialsDto) throws NotAuthorizedException;



}
