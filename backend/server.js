const express = require("express")
const cors = require("cors")
const restaurants = require("./api/restaurants.routes.js")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

module.exports = app