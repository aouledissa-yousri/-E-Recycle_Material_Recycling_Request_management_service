import { KeyError } from "../errors/KeyError"

export class RecycleRequest {

    constructor(
        private id: number,
        private material: string,
        private quantity: number, 
        private unit: string, 
        private location: string,
        private dateSubmitted: string,
        private status: string

    ){}

    public getId(): number { 
        return this.id 
    }

    public getMaterial(): string { 
        return this.material
     }

    public getQuantity(): number { 
        return this.quantity
    }

    public getUnit(): string { 
        return this.unit
    }

    public getLocation(): string { 
        return this.location
    }

    public getDateSubmitted(): string { 
        return this.dateSubmitted
    }

    public getStatus(): string { 
        return this.status
    }

    public setMaterial(material: string): void{
        if(material == undefined)
            throw new KeyError("material")
        
        this.material = material
    }

    public setId(id: number): void{
        if(id == undefined)
            throw new KeyError("id")
        this.id = id
    }

    public setQuantity(quantity: number): void {
        if(quantity == undefined)
            throw new KeyError("quantity")
        this.quantity = quantity
    }

    public setUnit(unit: string): void {
        if(unit == undefined)
            throw new KeyError("unit")
        this.unit = unit
    }

    public setLocation(location: string): void {
        if(location == undefined)
            throw new KeyError("location")
        this.location = location
    }

    public setDateSubmitted(dateSubmitted: string): void{
        if(dateSubmitted == undefined)
            throw new KeyError("dateSubmitted")
        this.dateSubmitted = dateSubmitted
    }

    public setStatus(status: string): void {
        if(status == undefined)
            throw new KeyError("status")
        this.status = status
    }

    public static createRecycleRequest (data: any): RecycleRequest {
        let recycleRequest = new RecycleRequest(0,"",0,"","","","")
        recycleRequest.setMaterial(data["material"])
        recycleRequest.setQuantity(data["quantity"])
        recycleRequest.setUnit(data["unit"])
        recycleRequest.setLocation(data["location"])
        recycleRequest.setDateSubmitted(data["dateSubmitted"])

        return recycleRequest

    }

    public getData(){
        return {
            "material": this.material,
            "quantity": this.quantity,
            "unit": this.unit,
            "location": this.location,
            "dateSubmitted": this.dateSubmitted,
            "status": this.status
        }
    }



}