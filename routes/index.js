const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const _ = require('lodash')

const determineWinner = require('../lib/determineWinner')
const db = require('../models/index')

let playerOne = { name: 'You', move: '' }
let playerTwo = { name: 'Master Rock', move: '' }
let options = { title: 'Rock Paper JS', playerOne: '', playerTwo: '', winner: '' }

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', options)
})

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/', urlencodedParser, (req, res) => {
  playerOne.move = req.body.move
  playerTwo.move = _.sample(['✂', '📄', '🗿'])
  options.playerOne = playerOne
  options.playerTwo = playerTwo
  options.winner = determineWinner(playerOne, playerTwo)
  let win = false
  if (options.winner.name === playerTwo.name) {
    win = true
  }
  db.Move.create({
    myMove: playerTwo.move,
    theirMove: playerOne.move,
    win: win
  }).then(() => {
    db.Move.findAll().then(moves => {
      console.log(moves)
    })
  })
  res.render('index', options)
})
module.exports = router
