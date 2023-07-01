// const next = require('next');
// const express = require('express');

// const dev = process.env.NODE_ENV !== 'production';
// const port = process.env.PORT || 3000;
// const app = next({dev});

// const server = express();

// app.prepare().then(()=>{
//     const server = express();

//     server.listen(post,err=>{
//         if(err)throw err;
//         console.log(`Listening to port ${post}`);
//     })

// })
const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user::::::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});