Para criar o banco de dados

Rode o comando:

`docker run --name {{nome da instancia}} -p 5432:5432 -e POSTGRES_PASSWORD={{senha}} -d postgres`

OBS: O usuário é `postgres`

Com algum SGBD (foi usado o postbird) crie o banco weatherIF

Crie uma base de dados com o nome de weatherIF (ou qualquer outro nome desde que seja igual o `PG_DB_NAME` no arquivo `.env`)

adonis migrarion:run

Para expor a aplicação:

Instale o nginx (ou só baixe e rode ele no caso do windows) [Download Nginx](http://nginx.org/en/download.html)

Altere o arquivo `nginx.conf` dento da pasta `nginx-x.xx.x/conf` e inclua as seguintes especificações:

```
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            proxy_pass   http://localhost:3333;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
```

> Essa alteração fará com que a api que está rodando em http://localhost:3333 fique disposivel no http://IP_DA_MAQUINA:80 permitindo assim a comunicação com diferentes dispositivos (Sejam eles microcontroladores ou computadores)

> Não coloque a mesma porta que a api (atualmente 3333) está rodando para o NGINX listar (apenar coloque ela para redirecionar), utilize outra como foi no caso do exemplo (80)

## Para rodar o projeto:

- Inicie o banco de dados (postgres), seja ele um container ou o postgres diretamente instalado na maquina
- Inicie o servidor do backend (`npm run dev`)
- Inicie o Nginx (para expor a api)
- Inicie o frontend (`npm start`)
- Inicie o microcontrolador (Atualmente está sendo utilizado o PostHttpClient)
