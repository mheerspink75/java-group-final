# Group Final

For this assessment students will work in a group(s) to write a full stack application. This will incorporate everything we learned in the classroom. Students will be given tasks across the full stack to ensure everyone works on all pieces of the application. The application will be managed in a simulated kan ban agile style and will make use of Github issues and the project board. During the first day of the assessment students will go through the ERD and wireframe that the stakeholders had a account lead put together for you. From these each team will need to create their own endpoint documentation and add it to the wiki. Once that's done each team should meet with their lead and plan out the project by creating issues and assigning each member their first 2-3 tasks. The target for the first week is to finish version 1.0 of their application and go through a demo of progress with their lead that morning. The target for the second week is to have a functional prototype to present to the full FT team and others from Cook Systems internal staff. All teams will have a cut-off time of 12pm CT the last Thursday of class. At that point they should begin putting together their presentation and practice it with their lead a minimum of 2 times that afternoon. The final Friday all teams will present that applications.

---

## ERD

![Final ERD](https://user-images.githubusercontent.com/12191780/126099495-6344105b-c03b-454c-b20c-63678ffdcbdf.png)

---

## Wireframe

[Wireframe Figma Link](https://www.figma.com/file/JKGV6vAsGILQV0CxozGo5B/Final-Wireframe?node-id=0%3A1)

# Getting Started

## Server Requirements
- Java 11
- PostgreSQL
- Maven

## Client Requirements
- node 12.x, 14.x, or 16.x (17.x not yet supported, waiting on `react-scripts`)
- npm 8.x

## Starting Server
```shell
createdb projectmanagerapp
mvn spring-boot:run
```

## Starting Client
```shell
cd client-app
npm i
npm start
```

## Starting Client w/ Auth disabled (dev mode only)
```shell
# bash/bourne shells
REACT_APP_NO_AUTH=1 npm start

# cmd (windows)
set REACT_APP_NO_AUTH=1
npm start
```