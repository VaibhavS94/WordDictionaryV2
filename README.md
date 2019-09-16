# Project Info

* The Working Repository for the Project is called "WordDictionary".
* Server side scripting is done in Java using Spring Boot Framework.
* Client Side scripting(User Interface) is done using JSX using React Js.
* Database used is MYSql db.

# How to Run

1. Import the project WordDictionary in your IDE.
2. Make changes as per your choice of database in application.properties.
2. Build the maven project and run it using .jar file from target folder or if you are using Eclipse you can Run WordDictionary.class as Java application. Default port is 9393
3. The UserInterface is in folder "app-ui".
4. You need NodeJs inorder to run UI. Please install NodeJs
5. Go inside folder app-ui. Open command Prompt and run "npm start".
6. The Application will start at http://localhost:3000/home.

Note: If you change the server.port = newPort in application.properties then please make the appropriate changes inside "./app-ui/package.json" -> 'proxy': "http://localhost:newPort"

# Api Info

### The application has 3 API points:
* /api/upload(method=POST) : It uses a file as Request Parameter to read the file and then to                              store unique words in database.
* /api/dictionary(method=GET): It is used to get all the words in the database
* /api/search/word(method=GET): Uses Path varialble to search the word in the database.

Note: Swagger2 has been implemented in the Spring Boot project if you want to try out api functionality without using the UI

# UI Info

### The UI has 2 routing pages for the 2 components
1. Home(ShabKosh) : You can upload your text file using the Upload feature. This page also 		    displays all the words in the dictionary.
2. ShabdKhoj: This page can be used to search a word in the dictionary.

# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.1.7.RELEASE/maven-plugin/)
* [Spring Web Starter](https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-developing-web-applications)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#boot-features-jpa-and-spring-data)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/#using-boot-devtools)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)

