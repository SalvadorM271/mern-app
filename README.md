## Terraform Pipeline

This application is a TODO list made using the mern stack that allows user to perform create, read, update and delete operations
and it serves as a base for a ECS cluster in the following repository:

https://github.com/SalvadorM271/ecs/tree/main

## technologies

- React: popular js framework use for frontends
- Expressjs: js framework use for backends
- MongoDB Atlas: cloud solucion for mongoDB database
- Docker: Use to create images of the application
- ECR: AWS repository to store docker images

## Usage 

In order to use this repository an ECR repository must me created manually and be added to the workflows in .github/workflows
once that is done all that is needed fron the user is to push the code normally and the pipeline will take care of the rest.

steps to push code:

first check if you are in the correct branch

`git branch`

then we must add the changes

`git add .`

after that we need to commit our changes

`git commit -m "example commit"`

and finally

`git push`
