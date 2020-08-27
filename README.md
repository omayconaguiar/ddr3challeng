# DDR CHALLENGE

Desafio api

## Getting Started

### Dependencies

* node 10.20.1

### Installing

* yarn install

### Executing program

* yarn dev

## Exemplo arquivo env

* PORT=3000

* LOG_LEVEL='debug'

* DB_NAME='ddr3'
* DB_USERNAME='SEU USERNAME'
* DB_PASSWORD='SUA SENHA'

## Criando database

Criar banco de dados postgres.

CREATE DATABASE ddr3;

Após criar banco de dados ir na pasta de migrations copiar e colar todas as janelas do projeto.

## Author

Maycon Aguiar 

## Endpoints

* POST
http://localhost:3000/ddr3/tabulations
* POST
http://localhost:3000/ddr3/records
* GET
http://localhost:3000/ddr3/matchings

## Cronjob e Json Postman
Segue no projeto cronjob de 20 em 20 segundos e json referente as apis construídas.