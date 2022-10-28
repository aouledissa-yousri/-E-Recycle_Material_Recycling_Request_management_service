import { RecycleRequestService } from '../../services/RecyclerequestService/RecycleRequestService'
import { checkAccessToken } from '../../decorators'

export abstract class RecycleRequestController {

    @checkAccessToken()
    public static getRecycleRequests(token){
        return RecycleRequestService.getRecycleRequests(token)
    }

    @checkAccessToken()
    public static makeRecycleRequest(token, payload){
        return RecycleRequestService.makeRecycleRequest(token, payload)
    }

    @checkAccessToken()
    public static withdrawRecycleRequest(token, payload){
        return RecycleRequestService.withdrawRecycleRequest(token, payload)
    }

}