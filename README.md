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

## Buildando tabelas

Criar banco de dados postgres.

CREATE DATABASE ddr3;

Após criar banco de dados 

* yarn migrations:run v1598555624

Obs: o numero de versao é referente ao número que está na pasta migrations

Digitar senha do banco de dados

Para criar novas tabelas
* yarn migrations:new Nome

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
