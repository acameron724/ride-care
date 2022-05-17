import express from "express"
import UberClient from "../../../apiClient/UberClient.js"

const productsRouter = new express.Router()

productsRouter.get("/", async (req, res) => {
  try {
    const rideResponse = await UberClient.getRide()
    const rideData = JSON.parse(rideResponse)
    return res
      .set({ "Content-Type" : "application/json" })
      .status(200)
      .json(rideData)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

productsRouter.post("/", async (req, res) => {
  try {
    const rideResponse = await UberClient.getRide()
    const rideData = JSON.parse(rideResponse)
    return res
      .set({ "Content-Type" : "application/json" })
      .status(200)
      .json(rideData)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default productsRouter
