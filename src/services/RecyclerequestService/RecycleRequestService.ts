import axios from "axios"
import { HOSTS } from '../../../connectedHosts'
import { KeyError } from "../../errors/KeyError"
import { RecycleRequest } from '../../models/RecycleRequest'


export abstract class RecycleRequestService {

    public static async getRecycleRequests(token: string){

        const {data, status} = await axios.get<RecycleRequest[]>(
            HOSTS[0]+"/getRecycleRequests/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                    Token: token
                }
            }
        )


        return data

    }

    public static async makeRecycleRequest(token: string, payload: any){

        try{

            let recycleRequest = RecycleRequest.createRecycleRequest(payload)

            const {data, status} = await axios.post(
                HOSTS[0]+"/makeRecycleRequest/",
                recycleRequest.getData(),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: "application/json",
                        Token: token
                    },

                }
            )


            return data

        }catch(error){

            if(error instanceof KeyError){
                return {"message": "Invalid parameters"}
            }
        }
        

    }

    public static async withdrawRecycleRequest(token: string, payload: any){
        try{

            
            let recycleRequestId = payload["id"]

            const {data, status} = await axios.delete(
                HOSTS[0]+"/withdrawRecycleRequest/",
                
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: "application/json",
                        Token: token
                    },

                    data: {
                        "id": recycleRequestId
                    }
                }
                
            )

            return data

        }catch(error){

            if(error instanceof KeyError){
                return {"message": "Invalid parameters"}
            }

        }
    }

    public static async getAllRecycleRequests(token: string){

        const {data, status} = await axios.get<RecycleRequest[]>(
            HOSTS[0]+"/getAllRecycleRequests/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                    Token: token
                }
            }
        )


        return data

    }

    public static async validateRecycleRequest(token: string, payload: any){

        const {data, status} = await axios.patch(
            HOSTS[0]+"/validateRecycleRequest/",
            payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                    Token: token
                },

            }
        )

        return data
    }


    public static async completeRecycleRequest(token: string, payload: any){

        const {data, status} = await axios.patch(
            HOSTS[0]+"/completeRecycleRequest/",
            payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                    Token: token
                },

            }
        )

        return data
    }

}