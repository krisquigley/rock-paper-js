const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const _ = require('lodash')

const determineWinner = require('../lib/determineWinner')
const convertMove = require('../lib/convertMove')
const db = require('../models/index')

let playerOne = { name: 'You', move: '' }
let playerTwo = { name: 'Master Rock', move: '' }
let options = { title: 'Rock Paper JS', playerOne: '', playerTwo: '', winner: '' }
let win = false

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', options)
})

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/', urlencodedParser, (req, res) => {
  playerOne.move = req.body.move
  console.log(req.body)
  playerOne.totalScore = parseInt(req.body.playerOneTotalScore)
  playerOne.convertedMove = convertMove(playerOne.move)

  playerTwo.move = _.sample(['s', 'p', 'r'])
  playerTwo.convertedMove = convertMove(playerTwo.move)
  playerTwo.totalScore = parseInt(req.body.playerTwoTotalScore)
  options.winner = determineWinner(playerOne, playerTwo)

  if (options.winner && options.winner.name === playerTwo.name) {
    win = true
    playerTwo.totalScore += 1
  } else if (options.winner && options.winner.name === playerOne.name) {
    playerOne.totalScore += 1
  }

  db.Move.create({
    myMove: playerTwo.move,
    theirMove: playerOne.move,
    win: win
  })

  options.playerOne = playerOne
  options.playerTwo = playerTwo

  res.render('index', options)
})
module.exports = router
