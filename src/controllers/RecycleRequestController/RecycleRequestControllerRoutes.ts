import { RecycleRequestController } from "./RecycleRequestController" 
import express from "express" 

let recycleRequestControllerRoutes = express.Router()

//put your routes here

    
recycleRequestControllerRoutes.get("/getRecycleRequests", (request, response) => RecycleRequestController.getRecycleRequests(request.headers.token).then(recycleRequests => response.send(recycleRequests)))
//recycleRequestControllerRoutes.post("/makeRecycleRequest", (request, response) => RecycleRequestController.makeRecycleRequest(request.body.headers["Token"], request.body.data).then(result => response.send(result)))
recycleRequestControllerRoutes.post("/makeRecycleRequest", (request, response) => RecycleRequestController.makeRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))
recycleRequestControllerRoutes.delete("/withdrawRecycleRequest", (request, response) => RecycleRequestController.withdrawRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))
recycleRequestControllerRoutes.get("/getValidatedRecycleRequests", (request, response) => RecycleRequestController.getValidatedRecycleRequests(request.headers.token).then(result => response.send(result)))
recycleRequestControllerRoutes.get("/getAllRecycleRequests", (request, response) => RecycleRequestController.getAllRecycleRequests(request.headers.token).then(result => response.send(result))) 
//recycleRequestControllerRoutes.patch("/validateRecycleRequest", (request, response) => RecycleRequestController.validateRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))
recycleRequestControllerRoutes.patch("/validateRecycleRequest", (request, response) => RecycleRequestController.validateRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))
recycleRequestControllerRoutes.patch("/completeRecycleRequest", (request, response) => RecycleRequestController.completeRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))

export { recycleRequestControllerRoutes }