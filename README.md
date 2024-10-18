# Totally Not T3 Stack
This stack uses many components in the T3 stack, but it uses Svelte instead of Next.JS.

## Creating a project
Clone this project, install all the packages, remove the `.git` folder and configure the `.env`

```bash
# clone this project
git clone https://github.com/Michaelcoding15/totally-not-t3-stack

# install all of the packages
pnpm i

# remove .git
rm -rf .git

# configure the .env file
```

## Tools
This stack includes:
- SvelteKit
- Drizzle
- Tailwind
- tRPC
- Auth.js

# Drizzle
This demo is designed using Turso, so go to https://authjs.dev/getting-started/adapters/drizzle and https://orm.drizzle.team/docs/drizzle-config-file if you want to use something besides Turso. Otherwise, create a turso group and database, and then fill in the `.env`

# Auth.js
This demo uses google oauth, so you will need to follow the steps in https://developers.google.com/identity/protocols/oauth2 to create your google app. If you don't want to use google, please read the method you want to use in https://authjs.dev/getting-started/authentication.

### All other configuration is taken care of. Happy Coding!
