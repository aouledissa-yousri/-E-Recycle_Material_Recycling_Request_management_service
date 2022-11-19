

export abstract class DateHelper {


    public static getCurrentTimestamp(){
        const current = new Date()
        return current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() + "T" + current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds() + ", 000Z"

    }

}