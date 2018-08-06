const router = require('express').Router()
const { User, Review, Channel } = require('../model')

router.get('/', async (req, res, next) => {
  try {
    const channels = await Channel.findAll()
    res.json(channels)
  } catch (error) {
    next(error)
  }
});

router.get('/id', async (req, res, next) => {
  try {
    const channel = await Channel.findAll(req.params.id)
    res.json(channel)
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newChannel = await Channel.create(req.body)
    res.json(newChannel)
  } catch (error) {
    next(error)
  }
});

module.exports = router;