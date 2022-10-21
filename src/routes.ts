import express from "express"
import { recyclerequestControllerRoutes } from "./controllers/RecyclerequestController/RecyclerequestControllerRoutes"
import { materialControllerRoutes } from "./controllers/MaterialController/MaterialControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/recycleRequest", recyclerequestControllerRoutes)
routes.use("/materials", materialControllerRoutes)


export { routes }