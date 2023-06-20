# Svelte blog application

Simple blog application created using Svelte. It features registration, login, adding posts and deleting them.


## Installation

```bash
#clone from github
git clone https://github.com/a-matoga/svelte-blog.git 
#install all dependencies
npm install
#generate database
npx prisma generate
#create database migration
npx prisma migrate dev --name init    
```

## How to run?

Start a development server:

```bash

npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

or create a production version:

```bash
npm run build
```
