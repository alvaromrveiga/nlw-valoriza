# nlw-valoriza
Projeto desenvolvido na Next Level Week Together da [Rocket Seat](https://rocketseat.com.br/)

## Adicionais nesse projeto
 - Lançamento de erros conhecidos com os respectivos status codes

## Contribuindo
 1. Clone este repositório
 1. Na raiz do projeto, rode :
     ```sh 
     $ yarn install 
    ```
 1. Na raiz, crie um arquivo chamado .env.dev com:
     ```sh
     JWT_SECRET="Sua_chave_privada"
     SENDGRID_API_KEY="Sua_chave_Sendgrid"
     SENDGRID_EMAIL="Seu_email"
     ```
 1. Inicie o banco de dados, na raiz:
    ```sh 
     $ yarn typeorm migration:run
    ```
 1. Inicie o servidor de desenvolvimento, na raiz:
    ```sh 
     $ yarn dev 
    ```
