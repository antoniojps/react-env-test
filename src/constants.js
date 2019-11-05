/*

Use `REACT_APP_DEPLOY_ENV` custom environment variable to build for the different environments:

- `dev`: the default, uses the development endpoints
- `qa`: quality assurance endpoints
- `production`: production endpoints

*/

const DEPLOY_ENV = {
  qa: 'qa',
  production: 'production',
  dev: 'dev',
};

const computedDeployUrl = ({ qa, dev, production }) => {
  const ENV = process.env.NODE_ENV;
  const REACT_APP_DEPLOY_ENV = process.env.REACT_APP_DEPLOY_ENV || DEPLOY_ENV.dev;
  if (ENV === 'production') {
    if (REACT_APP_DEPLOY_ENV === DEPLOY_ENV.qa) return qa;
    if (REACT_APP_DEPLOY_ENV === DEPLOY_ENV.production) return production;
  }
  return dev;
};

export const PORTAL_IMAGES_ENDPOINT = (() => {
  const qa = 'https://api-imagens.dev.ua.pt/v1';
  const dev = 'https://api-imagens.qa.ua.pt/v1';
  const production = 'https://api-imagens.ua.pt/v1';

  return computedDeployUrl({
    qa,
    dev,
    production,
  });
})();

export const PORTAL_ENDPOINT = (() => {
  const qa = 'https://www.qa.ua.pt';
  const dev = 'https://www.dev.ua.pt';
  const production = 'https://www.ua.pt';

  return computedDeployUrl({
    qa,
    dev,
    production,
  });
})();

export const PORTAL_API = (() => {
  const qa = 'https://www.qa.ua.pt/api/v1';
  const dev = 'https://www.dev.ua.pt/api/v1';
  const production = 'https://www.ua.pt/api/v1';

  return computedDeployUrl({
    qa,
    dev,
    production,
  });
})();

export const DEV_AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwMzMxOTA4IiwidXUiOiJicnVub2FhbmRyYWRlQHVhLnB0IiwiaXVwaSI6IjgxMjkxZDM2LWUwZmUtNDgyZS05MDE3LWZmYmNlMDRjODU4MyIsInVzZXJuYW1lIjoiQnJ1bm8gQW5kcsOpIE1hbnNpbGhhIEFuZHJhZGUiLCJpcCI6Ijo6MSIsInJvbGVzIjpbImFkbWluIiwiZWRpdG9yIiwidXNlciJdLCJuYmYiOjE1NzI1MjQ3NTAsImV4cCI6MTU3MzEyOTU1MCwiaWF0IjoxNTcyNTI0NzUwfQ.W7Oh6jgF6smWzcnZAEW2q8dbequ7hDbXu5SKDfGod9c';
