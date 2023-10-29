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

The themes `base`, `keycloak` are provided by Keycloak and only serve as reference, they should not be edited. They were extracted from the `org.keycloak.keycloak-themes-22.0.5.jar` found within the keycloak container in the folder `/opt/keycloak/lib/lib/main`.

To get the themes provided by Keycloak copy them from the docker container

`docker cp keycloak-theme-editor-keycloak-1:/opt/keycloak/lib/lib/main/org.keycloak.keycloak-themes-22.0.5.jar ./`

Then extract the jar file

`jar xf org.keycloak.keycloak-themes-22.0.5.jar`

Reference: <https://www.keycloak.org/docs/latest/server_development/#_themes>
