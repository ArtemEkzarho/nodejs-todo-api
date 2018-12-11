# Todo api

**GET /todos** - fetch all todos by current user('x-auth' with JW token in request header)

**POST /todos** - add todo obj with JW token from current user('x-auth' with JW token in request header)
```javascript
{
   "text": "Some todos text" 
}
```

**GET /todos/:id** - fetch one todo by current mongodb id('x-auth' with JW token in request header)

**DELETE /todos/:id** - remove one todo by current mongodb id('x-auth' with JW token in request header)

**PATCH /todos/:id** - updated one todo by current mongodb id('x-auth' with JW token in request header)
```javascript
{
    "completed": true,
    "text": "New todos text"
}
```

**POST /users** - sign in
```javascript
{
    "email": "example@email.com",
    "password": 12345!
}
```

**GET /users/me** - fetch current user data by JW token in header

**POST /users/login** - log in
```javascript
{
    "email": "example@email.com",
    "password": 12345!
}
```

**DELETE /users/me/token** - log out by JW token in header

