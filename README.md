### Environments

You can use the `REACT_APP_DEPLOY_ENV` custom environment variable to build for the different environments:

- `dev`: the default, uses the development endpoints
- `qa`: quality assurance endpoints
- `production`: production endpoints

#### Example deployment commands:

To read more about adding custom variables: [Create React App documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-temporary-environment-variables-in-your-shell).

##### Windows (cmd.exe)

```
set "REACT_APP_DEPLOY_ENV=production" && npm run build
```

##### Windows (Powershell)

```
($env:REACT_APP_DEPLOY_ENV = "production") -and (npm run build)
```

##### Linux, macOS (Bash)

```
REACT_APP_DEPLOY_ENV=production npm run build
```
