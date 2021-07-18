const app = require("./server.js")
const mongodb = require("mongodb")
const dotenv = require("dotenv")
const RestaurantsDAO = require("./dao/restaurantsDAO.js")

const ReviewsDAO = require("./dao/reviewsDAO.js")


dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    poolSize: 50,
    wtimeout: 2500,
    useNewUrlParse: true }
  )
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await RestaurantsDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })