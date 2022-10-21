export class Material {

    constructor(private id: number, private type: string){}

    public getId(): number { 
        return this.id
    }

    public getType(): string { 
        return this.type
    }


}