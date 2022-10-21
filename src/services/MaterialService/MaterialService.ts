import axios from "axios"
import { Material } from '../../models/Material';
import { HOSTS } from "../../../connectedHosts"

export abstract class MaterialService {


    public static async getMaterials(){

        try{

            const {data, status} = await axios.get<Material[]>(
                HOSTS[0]+"/getMaterials/",
                {
                    headers: {
                        Accept: "application/json",
                    }
                }
            )

            return data

        }catch(error){
            return {"message": "an error occurred please try again later"}
        }
    }
}