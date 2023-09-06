
const express = require('express');
const jsxEngine = require('jsx-view-engine');
require('dotenv').config();
const mongoose = require('mongoose');
// import data
const pokemon = require('./models/pokemon');
const Poke = require('./models/poke');

const app = express();

const PORT = 3000;

// App config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.urlencoded({extended: false}));

// ROUTES

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
  //console.log(pokemon)
});

// app.get('/pokemon', (req, res) => {
//   res.render('Index', {
//     pokemon: pokemon
//   });
// })

app.get('/pokemon', async (req, res) => {
  try {
    const pokeFromDB = await Poke.find({});
    res.render('Index', {
      pokemon: pokeFromDB
    });
  } catch (e) {
    console.error(e);
  }
});


app.get('/pokemon/new', (req, res) => {
  res.render('New')
})

app.post('/pokemon', async (req, res) => {
  try {
    const createdPoke = await Poke.create(req.body);
    res.redirect('/pokemon');
  } catch (e) {
    console.log(e);
  }
})

app.get('/pokemon/:index', async (req, res) => {
  
  const { index } = req.params;

  const poke = await Poke.findById(index);
  
  res.render('Show', {
    pokemon: poke
  }
  )
})

// CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_URI);
// test connection
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB');
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});