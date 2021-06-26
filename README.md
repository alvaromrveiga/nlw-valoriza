# nlw-valoriza

Projeto desenvolvido na Next Level Week Together da [Rocket Seat](https://rocketseat.com.br/)

## Teste você

https://veiga-nlw-valoriza.herokuapp.com/

## Adicionais nesse projeto

- Deploy no [Heroku](https://www.heroku.com/)
- Envio de emails com [SendGrid](https://sendgrid.com/)
- Banco de dados [PostgreSQL](https://www.postgresql.org/)
- Lançamento de erros conhecidos com os respectivos status codes

## Contribuindo

1.  Clone este repositório
1.  Na raiz do projeto, rode :
    ```sh
    $ yarn install
    ```
1.  Na raiz, crie um arquivo chamado .env.local com:

    ```sh
    JWT_SECRET="Sua_chave_privada"

    SENDGRID_API_KEY="Sua_chave_Sendgrid"
    SENDGRID_EMAIL="Seu_email"

    # A senha deve estar em formato de URL
    DB_URL="postgres://usuário:senha@host:5432/bancoDeDados"

    # Dev usa src e ts; Produção usa dist e js
    TYPEORM_FOLDER = "src"
    TYPEORM_FILE = 'ts'
    ```

1.  Inicie o banco de dados, na raiz:
    ```sh
     $ yarn typeorm migration:run
    ```
1.  Inicie o servidor de desenvolvimento, na raiz:
    ```sh
     $ yarn dev
    ```
