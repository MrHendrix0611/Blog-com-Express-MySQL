# Blog com Express.js e MySQL
Uma blog simples feito em Express.js, Sequlize + MySQL e handlebars

## 📝 Descrição

Este é um projeto de Blog desenvolvido com Node.js, utilizando Express, Sequelize, MySQL e Handlebars como template engine.
O objetivo do projeto é permitir a criação e exibição de postagens, incluindo upload de imagens, servindo como estudo prático de backend com renderização no servidor.

## 🚀 Tecnologias

- Node.js
- Express
- Express Handlebars
- MySQL
- Sequelize (ORM)
- Multer (upload de arquivos)
- dotenv (variáveis de ambiente)
- bcryptjs
- express-session
- connect-ssession-sequelize

## 📁Estrutura do Projeto

blog/
├── main.js
├── package.json
├── package-lock.json
├── models/
│   ├── db.js
│   └── Post.js
├── src/
│   ├── uploads/
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.handlebars
│   │   └── home.handlebars
│   └── css/
└── node_modules/

## ⚙ Funcionalidades

- 📄 Criação de postagens
- 🖼 Upload de imagens para os posts
- 📋 Listagem de posts
- 🗄 Persistência de dados com MySQL
- 🎨 Renderização server-side com Handlebars

## 🔧 Configuração do Ambiente

PRÉ-REQUISITOS:

Node.js instalado

MySQL instalado e em execução

📦 INSTALAÇÃO

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git

Acesse a pasta do projeto:

cd blog

Instale as dependências:

npm install

🗄️ BANCO DE DADOS

Configure o arquivo de conexão (models/db.js) com suas credenciais do MySQL ou utilize um arquivo .env com as variáveis:

DB_NAME=blog
DB_USER=root
DB_PASSWORD=sua_senha
DB_HOST=localhost

▶️ EXECUTANDO O PROJETO

Inicie o servidor com:

node main.js

O projeto estará disponível em:

http://localhost:8081

## 📚 Objetivo do Projeto

Este projeto foi desenvolvido com fins educacionais, para praticar:

- Estruturação de aplicações Node.js
- MVC básico
- ORM com Sequelize
- Upload de arquivos
- Templates com Handlebars
- Integração com banco de dados relacional

## 🛠️ Melhorias Futuras

- Sistema de autenticação de usuários
- Edição e exclusão de posts
- Validação de formulários
- Paginação
- Barra de Pesquisa e Filtragem de Conteúdo
- Painel administrativo

## 📬 Contato

Feito com 💙 por [Guilherme](https://github.com/MrHendrix0611)

Entre em contato:  
[LinkedIn](https://www.linkedin.com/in/guilherme-hendrik-59775326a)  
[Email](silva06guilherme11@gmail.com)




