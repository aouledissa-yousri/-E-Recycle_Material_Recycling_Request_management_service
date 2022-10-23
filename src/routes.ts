import express from "express"
import { recycleRequestControllerRoutes } from "./controllers/RecycleRequestController/RecycleRequestControllerRoutes"
import { materialControllerRoutes } from "./controllers/MaterialController/MaterialControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/recycleRequest", recycleRequestControllerRoutes)
routes.use("/materials", materialControllerRoutes)


export { routes }