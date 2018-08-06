const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/channels', require('./channels'))
router.use('/review', require('./review.js'))

router.use((req, res, next) => {
  res.status(404).send('NOT FOUND')
})

module.exports = router;