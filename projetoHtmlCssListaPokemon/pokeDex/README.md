# PROJETO POKEDEX WEB JS

no git bash usando o comando mkdir foi criado as pasta

```
mkdir assets
mkdir assets/css
mkdir assets/js
```

depois vamos criar os arquivos usando o comando touch

```
touch ./assets/css/global.css
touch ./assets/js/main.js
```

# REQUISIÇÃO VIA HTTP

URL:<http://pokeapi.co/api/v2/pokemon>
    ${endereço}/$path= {caminho de identificação do recurso}

  Request Method: GET | POST | PUT | DELETE

  ENTENDENDO A QUERY STRING (TUDO APOS A ?)

    Request Headers 
    content-type: application/json

      Request Body
      {
      "name":"teste"
      }

  <https://pokeapi.co/api/v2/pokemon?offset=20&limit=2>
  offsite = deslocamento das paginas disponiveis
  limite = numero de itens retornados

O servidor retornara um status code

```
200 - sucesso
300 - redirect
400 - erro parte do cliente 
500 - erro servidor
```
