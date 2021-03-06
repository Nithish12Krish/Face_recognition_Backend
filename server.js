const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register=require('./Controllers/register');
const signin=require('./Controllers/signin');
const profile=require('./Controllers/getprofile');
const image=require('./Controllers/image');

const db = knex({
  // Enter your own database information here based on what you created
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'nithi',
    database : 'smartbrain'
  }
});

const app = express();

app.use(cors())
app.use(express.json())
app.get('/', (req, res)=> {
  res.send(database.users);
})

app.post('/signin', (req,res)=>{ signin.handleSignin(req,res,db,bcrypt) })

app.post('/register', (req,res)=> { register.handleRegister(req,res,db,bcrypt) } )

app.get('/profile/:id', (req,res)=> { profile.handleProfileGet(req,res,db) })

app.put('/image',(req,res)=>{ image.handleImage(req,res,db)})

app.post('/imageUrl',(req,res)=>{ image.handleApiCall(req,res) })

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
