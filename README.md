# FrontUsuariosAngular

## Angular + Redux + Docker + NGINX + Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#### INSTALL

- `npm install`
- `ng serve`

#### Build DOCKER Manualmente

- `docker build . -t front-usuarios-angular:latest`
- `docker run -d -p 80:80 front-usuarios-angular:latest`
- localhost/

#### Build DOCKER Automatizado

- `docker build . -t front-usuarios-angular:latest`
- `docker-compose up -d`
- `docker-compose -d --build (Recompilar container)`

#### DEPLOY WITH HEROKU CLI

- add files:
    - Dockerfile
    - heroku.yml
    - app.json (Para que funcione el botón `Deploy to Heroku` del README.md)
- `heroku container:login`
- `heroku create`
- `docker tag front-usuarios-angular registry.heroku.com/{APP_NAME_HEROKU}/web`
- `docker push registry.heroku.com/{APP_NAME_HEROKU}/web`
- `heroku container:release web --app={APP_NAME_HEROKU}`
- `heroku open`
