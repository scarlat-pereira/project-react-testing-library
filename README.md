Este projeto contém os requisitos realizados por _[Scarlat Pereira](https://www.linkedin.com/in/scarlatpereira/)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project React Testing Library

Neste projeto utilizei Jest e a biblioteca React Testing Library para escrever testes automatizados em React. Vale ressaltar a relevância dessa biblioteca para testar as nossas aplicações, sendo elas: 

 - Simplicidade em seu uso;
 - Tem muitos menos caveats;
 - Reforça o bom uso das melhores práticas de testes ao incentivar e facilitar o teste de comportamentos e não de implementação;
 - Permitir a refatoração da sua arquitetura de componentes.

Veja o exemplo a seguir do layout do projeto!

## Demo

![Gravação de tela de 20-10-2022 18_59_19](https://user-images.githubusercontent.com/108958216/215907952-1fe1f444-3d47-4a21-b8c5-a7d872488812.gif)

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em engcivil.scarlat@gmail.com


1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:scarlat-pereira/project-react-testing-library.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd project-react-testing-library
  npm i
```

4. Por último, rode o comando **npm test** para visualizar os testes.

```javascript
  npm test
```

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Utilizar os seletores (queries) da React-Testing-Library em testes automatizados.
 - Simular eventos com a React-Testing-Library em testes automatizados.
 - Testar fluxos lógicos assíncronos com a React-Testing-Library.
 - Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.
 - Criar mocks de APIs utilizando fetch.
 - Testar inputs.

## Escopo do Projeto

- [x] [Teste o componente `<App.js />`](#1-teste-o-componente-App.js)
- [x] [2. Teste o componente `<About.js />`](#2-teste-o-componente-About.js)
- [x] [3. Teste o componente `<FavoritePokemons.js />`](#3-teste-o-componente-FavoritePokemons.js)
- [x] [4. Teste o componente `<NotFound.js />`](#4-teste-o-componente-NotFound.js) 
- [x] [5. Teste o componente `<Pokedex.js />`](#5-teste-o-componente-Pokedex.js)
- [x] [6. Teste o componente `<Pokemon.js />`](#6-teste-o-componente-Pokemon.js)
- [x] [7. Teste o componente `<PokemonDetails.js />`](#7-teste-o-componente-PokemonDetails.js)
