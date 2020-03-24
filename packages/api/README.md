# Matterwiki API Project

### Environment variables to set

* `AUTH_SECRET`
* `DB_HOST`
* `DB_NAME`
* `DB_USER_NAME`
* `DB_PASSWORD`
* `DB_LOG_DEBUG`
* `SERVER_HOST`
* `SERVER_PORT`


```
"start": "concurrently --kill-others --prefix-colors 'bgGreen.bold,bgMagenta.italic'  'npm:start:client' 'npm:start:api'",
```