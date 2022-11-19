import { KeyError } from '../errors/KeyError';
import { AddMakeRecycleRequestNotification } from './AddMakeRecycleRequestNotification';


export class ValidateCompleteRecycleRequestNotificationPayload extends AddMakeRecycleRequestNotification {

    constructor(private id: number, description: string, date: string, checked: boolean){
        super(description, date, checked)
    }

    public getId(): number {
        return this.id
    }

    public setId(id: number){
        if(id == undefined)
            throw new KeyError("id")
        this.id = id
    }

    public getData(){
        return {
            "id": this.id,
            "notification": super.getData().notification
        }
    }

    public static createValidateCompleteRecycleRequestNotificationPayload(id: number, description: string, date: string, checked: boolean){
        let validateCompleteRecycleRequestNotificationPayload = new ValidateCompleteRecycleRequestNotificationPayload(0, "", "", false)
        validateCompleteRecycleRequestNotificationPayload.setId(id)
        validateCompleteRecycleRequestNotificationPayload.setChecked(checked)
        validateCompleteRecycleRequestNotificationPayload.setDescription(description)
        validateCompleteRecycleRequestNotificationPayload.setDate(date)
        return validateCompleteRecycleRequestNotificationPayload
    }

}