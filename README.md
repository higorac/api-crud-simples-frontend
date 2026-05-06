# Interface de Cadastro de Usuários

Este projeto consiste em uma interface web moderna para consumo da API de usuários, desenvolvida com React e Vite, focada em uma experiência de usuário fluida e design responsivo.

## Tecnologias Utilizadas

* React.js
* Vite
* Axios (Consumo de API)
* TypeScript

## Requisitos Próvios

* Node.js instalado
* API do back-end em execução ou URL de produção disponível

## Configuração para Desenvolvimento Local

1. Clone o repositório:
   git clone https://github.com/seu-usuario/nome-do-repositorio-frontend.git

2. Instale as dependências:
   npm install

3. Configuração da API:
   Abra o arquivo src/services/api.js (ou api.ts) e configure a baseURL com o endereço da sua API:
   const api = axios.create({
     baseURL: 'http://localhost:3000'
   });

4. Execute o projeto em modo de desenvolvimento:
   npm run dev

O projeto será aberto por padrão em http://localhost:5173.

## Funcionalidades Implementadas

* Listagem em tempo real de usuários via API.
* Formulário de cadastro com tratamento de evento para evitar recarregamento de página.
* Remoção de registros com atualização automática da interface.

## Build para Produção

Para gerar a versão otimizada do projeto:
npm run build
