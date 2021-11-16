package cooksys.projectmanagementapp.projectmanagement.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class NotFoundException {

    private static final long serialVersionUID = 8717524765921018451L;

    private String message;

}
