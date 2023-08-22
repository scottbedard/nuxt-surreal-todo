# nuxt-surreal-todo

> *Note:* This scaffolding is not quite done, check back later

A simple todo application using [Nuxt](https://nuxt.com/) and [SurrealDB](https://surrealdb.com/). To get started, install [Docker Compose](https://docs.docker.com/compose/install/) and run the following.

```bash
mv .env.example .env

docker-compose up
```

Your todo app should now be running at [`localhost:3000`](http://localhost:3000).

To explore the database and run queries, I recommend [`surrealist.app`](https://surrealist.app), you can connect with the following credentials.

```
Endpoint URL: http://localhost:8000/sql
Authentication mode: Root authentication
Username: root
Password: root
Namespace: test
Database: test
```
