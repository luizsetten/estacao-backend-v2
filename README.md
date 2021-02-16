Para criar o banco de dados

Rode o comando:

`docker run --name {{nome da instancia}} -p 5432:5432 -e POSTGRES_PASSWORD={{senha}} -d postgres`

OBS: O usuário é `postgres`

Com algum SGBD (foi usado o postbird) crie o banco weatherIF

Crie uma base de dados com o nome de weatherIF (ou qualquer outro nome desde que seja igual o `PG_DB_NAME` no arquivo `.env`)

adonis migrarion:run
