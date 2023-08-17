const express = require('express')
const app = express()
const cors = require('cors')
const port = 3500

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

const celestial_bodies = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Moon',
    'Sun',
    'Ceres',
    'Pluto',
    'Haumea',
    'Makemake',
    'Eris',
    'Io',
    'Europa',
    'Ganymede',
    'Callisto',
    'Titan',
    'Enceladus',
    'Triton',
    'Charon',
    'Phobos',
    'Deimos'
]

const rivers = [
    'Amazon',
    'Nile',
    'Yangtze',
    'Mississippi',
    'Danube',
    'Ganges',
    'Murray',
    'Volga',
    'Rhine',
    'Congo',
    'Indus',
    'Mekong',
    'Colorado',
    'Yukon',
    'Thames',
    'Paraná',
    'Niger',
    'Darling',
    'Tigris',
    'Euphrates'
]
 
app.get('/celestial-bodies', (req, res) => {
  res.json(celestial_bodies);
})

app.get('/rivers', (req, res) => {
    res.json(rivers);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})