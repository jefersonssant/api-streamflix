# API de Filmes StreamFlix

## Descrição

Esta é uma API (Application Programming Interface ou Interface de Programação de Aplicações) para estabelecer comunicação e envio de dados para o front-end do site StreamFlix. Trata-se de teste técnico para preenchimento de vaga de instrutor na Vai Na Web.

## Link de Deploy no Render

:link: <a href="https://api-streamflix.onrender.com/api/filmes" target="_blank">API-StreamFlix</a>

Este link pode ser utilizado para requisições do tipo GET e POST.

## Como rodar a aplicação localmente

1. Faça o clone do repositório:
```bash
git clone <LINK_DO_REPOSITÓRIO>
cd nome do projeto
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm run dev
```
Alternativa:

```bash
npm start
```

O servidor irá rodar na porta http://localhost:3000/api/filmes

## Endpoints

Para listar ou cadastrar novos filmes você vai utilizar a mesma a rota http://localhost:3000/api/filmes

### Método POST / Criar ou Inserir novo Filme

**Formato de envio dos dados para a API**

**Envio dos dados (JSON)**

```json
  {
    "titulo": "Invocação do Mal",
    "imagem": "https://br.web.img3.acsta.net/c_310_420/pictures/210/166/21016629_2013062820083878.jpg",
    "banner": "https://darkside.blog.br/wp-content/uploads/2020/05/Invocacao-do-mal.jpeg",
    "categoria": "Filmes de Terror"
  }
```

**OBS.:** Observe que serão inseridos duas imagens, uma de capa e outra de banner, o banner é em um formato mais retangular, pois vai se comportar como se fosse um vídeo para dar play na Categoria Continuar Assistindo. **A chave "titulo" não tem acento agudo.**.

### Método GET / Fazer requisição ou listar os filmes cadastrados

Retorna todos os filmes cadastrados na API:

```json
[
  {
    "id": 1,
    "titulo": "Invocação do Mal",
    "imagem": "https://br.web.img3.acsta.net/c_310_420/pictures/210/166/21016629_2013062820083878.jpg",
    "banner": "https://darkside.blog.br/wp-content/uploads/2020/05/Invocacao-do-mal.jpeg",
    "categoria": "Filmes de Terror"
  }
]
```

## Tecnologias Utilizadas

* <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
* <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express">
* <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" alt="Sqlite3">
* <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" alt="Nodemon">

## Dependências 
`express`
`sqlite3`
`cors`
`nodemon`

## Autor
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/133176621?v=4" width=115><br><sub text-decoration="none">Jeferson Santos</sub>](https://github.com/jefersonssant) |
| :---: |

Qualquer contribuição é bem-vinda!😄