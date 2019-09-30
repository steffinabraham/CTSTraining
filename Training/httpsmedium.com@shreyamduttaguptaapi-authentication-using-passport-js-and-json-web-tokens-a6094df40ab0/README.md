# apiAuth
Backend authentication using Passport JS, JSON Web Tokens and uses JWT strategy. 

# README #

### What is this repository for? ###
This repository is for generating JSON Web Tokens for registering users and storing data in MongoDB.

## Usage

```bash
npm install
```

```bash
npm start
```

## Endpoints
```bash
POST /users/register
```

```bash
POST /users/authenticate   // Gives back a token
```

```bash
GET /users/profile         // Needs json web token to authorize
```

credits: Traversy Media
