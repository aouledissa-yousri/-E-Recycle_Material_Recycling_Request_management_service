import { MaterialController } from "./MaterialController" 
import express from "express" 


let materialControllerRoutes = express.Router()

//put your routes here

materialControllerRoutes.get("/getAll", (request, response) => MaterialController.getMaterials(request).then(materials => response.send(materials)))

export { materialControllerRoutes }