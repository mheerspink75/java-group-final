package cooksys.projectmanagementapp.projectmanagement.services.impl;

import cooksys.projectmanagementapp.projectmanagement.dtos.CredentialsDto;
import cooksys.projectmanagementapp.projectmanagement.entities.User;
import cooksys.projectmanagementapp.projectmanagement.exceptions.NotAuthorizedException;
import cooksys.projectmanagementapp.projectmanagement.repositories.UserRepository;
import cooksys.projectmanagementapp.projectmanagement.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    @Override
    public User authenticate(CredentialsDto credentialsDto) throws NotAuthorizedException {


        final var credentials = Optional.ofNullable(credentialsDto);

        final var username =
                credentials.map(CredentialsDto::getUsername).flatMap(Optional::ofNullable).orElse("");

        final var password =
                credentials.map(CredentialsDto::getPassword).flatMap(Optional::ofNullable).orElse("");

        return userRepository.findByCredentialsUsername(username)
                .filter(u -> u.getCredentials().getPassword().equals(password))
                .orElseThrow(() -> new NotAuthorizedException("Invalid Credentials"));
    }
}
