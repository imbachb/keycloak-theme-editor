# Keycloak Theme Editor

## Initial setup
Start Keycloak docker container

```bash
docker-compose up -d
```

After a while, `localhost:8080/auth` will be available. Login with admin credentials provided in `docker-compose.yml`.

Once logged in, navigate to `Realm settings`, `Themes` and specify the theme.

## Edit theme

Edit the `example` theme under `src/main/resources/themes/example`.

The themes `base`, `keycloak` are provided by Keycloak and only serve as reference, they should not be edited. They were extracted from the `org.keycloak.keycloak-themes-21.1.1.jar` found within the keycloak container.

Reference: <https://www.keycloak.org/docs/latest/server_development/#_themes>
