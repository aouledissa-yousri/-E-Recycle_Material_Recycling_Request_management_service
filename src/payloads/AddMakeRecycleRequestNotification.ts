import { KeyError } from "../errors/KeyError"


export class AddMakeRecycleRequestNotification {


    constructor(private description: string, private date: string, private checked: boolean){}


    public getDescription(): string {
        return this.description
    }

    public getDate(): string {
        return this.date
    }

    public getChecked(): boolean {
        return this.checked
    }


    public setDescription(description: string){
        if(description == undefined)
            throw new KeyError("description")
        
        this.description = description
    }

    public setDate(date: string){
        if(date == undefined)
            throw new KeyError("date")
        
        this.date = date
    }

    public setChecked(checked: boolean){
        if(checked == undefined)
            throw new KeyError("checked")
        
        this.checked = checked
    }

    public getData(){
        return {
            "notification": {
                "description": this.description,
                "date": this.date,
                "checked": this.checked
            }
        }
    }

    public static createAddMakeRecycleRequestNotification(description: string, date: string, checked: boolean){
        let addMakeRecycleRequestNotification = new AddMakeRecycleRequestNotification("", "", false)
        addMakeRecycleRequestNotification.setDescription(description)
        addMakeRecycleRequestNotification.setDate(date)
        addMakeRecycleRequestNotification.setChecked(checked)
        return addMakeRecycleRequestNotification
    }


}