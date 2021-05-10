To start the server use the following command:

```
APPLICATION_URL=http://localhost:8000/admin DATABASE_URL=postgres://postgres@postgres:5432/juice_app DATABASE_SCHEMA=public DATABASE_SSL=false DATABASE_ENCRYPT=false FOREST_AUTH_SECRET=XXXXXXXXXXXXXXXX FOREST_ENV_SECRET=XXXXXXXXXXXXXXX PORT=8000 node index.js
```

Authentication to Forest Admin will fail when calling callback url `http://localhost:8000/admin/forest/authentication/callback?code=-XXXXXXXXXXXXX&state=%7B%22renderingId%22%3A76844%7D`.

Removing /admin path but still keeping Forest mounted under parent Express app fixes the issue:

1. In `index.js`, line 6, replace: `app.use('/admin', admin);` with `app.use('/', admin);`
2. Update APPLICATION_URL env variable to `http://localhost:8000`
3. Update "Admin backend URL" setting in environment config in Forest Admin panel to http://localhost:8000