# Projeto
O PokéTCG é um projeto realizado como desafio técnico para a Ília Digital.
Foi desenvolvido usando [Angular CLI](https://github.com/angular/angular-cli) na versão 11.2.3 e [NodeJS](https://nodejs.org) na versão 14.15.2.

## Instalação do Projeto
Passos para a instalação do projeto.

 1. Clone o repositório.

`git clone https://github.com/fsulczinski/ilia-challenge.git`

 2. Instale as dependências.

 `npm install`

 3. Rode o projeto para iniciar um servidor de desenvolvimento e navegue para *http://localhost:4200*.

 `ng serve`

## Configuração de ambiente de desenvolvimento
O PokéTCG consome a [API Pokémon TCG](https://pokemontcg.io), então se faz necessária uma **API Key** de desenvolvedor que você recebe ao se cadastrar [aqui](https://dev.pokemontcg.io/). Você também pode acessar a **documentação** da API Pokémon TCG [aqui](https://docs.pokemontcg.io/).

Quando você tiver uma **API Key** você precisa colocála-la no objeto presente no arquivo `environment` na pasta raiz da aplicação pois o serviço da aplicação que consome a API a utiliza como Header.

> { apiKey: 'SUA_API_KEY' }

## Dependências

O projeto utiliza algumas bibliotecas externas que, a título de conhecimento são:

> - [SwiperJS](https://swiperjs.com/)
> - [ngx-translate](https://github.com/ngx-translate/core)
> - [FontAwesome](https://fontawesome.com/)

## Responsável
**Felipe Sulczinski**
matos.szk@gmail.com
