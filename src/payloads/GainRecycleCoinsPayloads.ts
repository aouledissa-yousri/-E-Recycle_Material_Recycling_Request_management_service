import { KeyError } from '../errors/KeyError';
import { RecycleRequest } from '../models/RecycleRequest';


export class GainRecycleCoinsPayload {


    constructor(private id: number, private recycleRequest: RecycleRequest){}


    public getId(): number {
        return this.id 
    }

    public getRecycleRequest(): RecycleRequest {
        return this.recycleRequest
    }

    public setId(id: number) {
        if(id == undefined)
            throw new KeyError("id")
        this.id = id 
    }

    public setRecycleRequest(recycleRequest: RecycleRequest) {
        if(recycleRequest == undefined)
            throw new KeyError("recycleRequest")
        
        this.recycleRequest = recycleRequest
    }

    public getData(){
        return {
            "id": this.id,
            "recycleRequest": this.recycleRequest
        }
    }

    public static createGainRecycleCoinsPayload(id: number, recycleRequest: RecycleRequest){
        let gainRecycleCoinsPayload = new GainRecycleCoinsPayload(0, new RecycleRequest(0,"",0,"","","",""))
        gainRecycleCoinsPayload.setId(id)
        gainRecycleCoinsPayload.setRecycleRequest(recycleRequest)
        return gainRecycleCoinsPayload
    }

}