# Contact Manager

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#21-instalando-dependências)
  - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
  - [Migrations](#23-migrations)
- [Autenticação](#3-autenticação)
- [Endpoints](#4-endpoints)

---

## 1. Visão Geral

Aplicação back-end onde o usuário pode se cadastrar e criar novos contatos ao seu perfil.

Logo abaixo temos a lista de tecnologias usadas:

- [NodeJS](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
npx prisma migrate dev
```

### 2.4. Visualização das tabelas

Execute o seguinte código para ter acesso as tabelas:

```
npx prisma studio
```

---

## 3. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

A autenticação dessa aplicação é feita através de:

```
Authorization: Bearer Token
```

As rotas que necessitam de um Bearer Token seja passado são as seguintes:

| Método  | Rota           | Descrição                                      |
| ------  | -------------- | ---------------------------------------------- |
| PATCH   | [/client/:id]  | Atualização de um cliente.                     |
| DELETE  | [/client/:id]  | Deleção de um cliente.                         |
| POST    | [/contact/:id] | Criação de um contato.                         |
| PATCH   | [/contact/:id] | Atualização de um contato.                     |
| DELETE  | [/contact/:id] | Deleção de um contato.                         |

---

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- Login
  - POST - /login
