# Api-Meetapp - NodeJS

## Descrição:
Este projeto tem como finalidade a conclusão do Backen-01 da avaliação final do Bootcamp GoStack da Rocketseat


## Requisitos do desafio:

Nessa aplicação configure as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgresSQL ou MySQL);

### Funcionalidades

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação.

### Autenticação

Permita que um usuário se autentique em sua aplicação utilizando e-mail e senha.

- A autenticação deve ser feita utilizando JWT.
- Realize a validação dos dados de entrada;

### Cadastro e atualização de usuários

Permita que novos usuários se cadastrem em sua aplicação utilizando nome, e-mail e senha.

Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.

- Criptografe a senha do usuário para segurança.
- Realize a validação dos dados de entrada;

## Tecnologias:

dependencies
<ul>
    <li>bcryptjs</li>
    <li>express</li>
    <li>jsonwebtoken</li>
    <li>pg</li>
    <li>pg-hstore</li>
    <li>sequelize</li>
    <li>yup</li>
</ul>

devDependencies
<ul>
    <li>eslint</li>
    <li>eslint-config-airbnb-base</li>
    <li>eslint-config-prettier</li>
    <li>eslint-plugin-import</li>
    <li>eslint-plugin-prettier</li>
    <li>nodemon</li>
    <li>prettier</li>
    <li>sequelize-cli</li>
    <li>sucrase</li>
</ul>

## Configuração do ambiente:
Back-and desenvolvido em ambiente NodeJS.

## Forma de inicialização:
Para inicializar a aplicação deverá ser executado no terminal na raiz do projeto os seguintes comandos abaixo:

Para instalar todas as dependências
```bash
yarn
```

Para rodar a aplicação na porta 3000
```bash
yarn dev
```
