
# TODO List Web App

A simple TODO List app with JWT login, built to practice the MERN stack (MongoDB, Express, React, Node.js).

## Demo
<img width="1291" height="932" alt="image" src="https://github.com/user-attachments/assets/abb3c26a-f30d-4bac-a3e3-d9a9fac8acf5" />
<img width="1291" height="932" alt="image" src="https://github.com/user-attachments/assets/94e5421a-6886-4400-892b-a45824d72e44" />
<img width="1291" height="932" alt="image" src="https://github.com/user-attachments/assets/37873f5a-de40-4c9b-ba19-00fbb637056e" />


## Run Locally

1. Clone the project

```bash
  git clone https://github.com/taesaksit/todolist-webapp.git
```

2. Go to the backend directory and install

```bash
  cd backend
  npm install

```
3. Start backend

```bash
  nodemon server.js
```


4. go to the frontend directory and install

```bash
  cd todolist
  npm install

```

5. Start frontend

```bash
  npm run dev
```


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, MongoDB





## Environment for Backend

`PORT = 8000`

`JWT_SECRET = your_jwt_secret_key` 

`MONGO_URL = mongodb://localhost:27017/mydatabase`

`PATH_API = /api`

## Environment for Frontend 

`VITE_BASE_URL = http://localhost:8000/api`

