import { RecycleRequestService } from '../../services/RecyclerequestService/RecycleRequestService'
import { checkAccessToken } from '../../decorators'

export abstract class RecycleRequestController {

    @checkAccessToken()
    public static getRecycleRequests(token){
        return RecycleRequestService.getRecycleRequests(token)
    }

    @checkAccessToken()
    public static makeRecycleRequest(payload, token){
        return RecycleRequestService.makeRecycleRequest(payload, token)
    }

    @checkAccessToken()
    public static withdrawRecycleRequest(payload, token){
        return RecycleRequestService.withdrawRecycleRequest(payload, token)
    }

}