import { RecycleRequestController } from "./RecycleRequestController" 
import express from "express" 

let recyclerequestControllerRoutes = express.Router()

//put your routes here

    
recyclerequestControllerRoutes.get("/getRecycleRequests", (request, response) => RecycleRequestController.getRecycleRequests(request.headers.token).then(recycleRequests => response.send(recycleRequests)))
recyclerequestControllerRoutes.post("/makeRecycleRequest", (request, response) => RecycleRequestController.makeRecycleRequest(request.body, request.headers.token).then(result => response.send(result)))
recyclerequestControllerRoutes.delete("/withdrawRecycleRequest", (request, response) => RecycleRequestController.withdrawRecycleRequest(request.body, request.headers.token).then(result => response.send(result)))

export { recyclerequestControllerRoutes }