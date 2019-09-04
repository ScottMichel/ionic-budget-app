export class BudgetEntry {

    private label:string;

    private amount:number;

    private createdAT:Date;

    private category:string;
    
    private id:number;

    constructor(id, infos){
        this.id = id;
        if(infos){
            this.setInfo(infos);
        }
    }


    public setInfo(infos){
        this.label = infos.label;
        this.amount = infos.amount;
        this.createdAT = infos.createdAT;
        this.category = infos.category
    
}

public getId():number{
    return this.id;
}

public getLabel():string{
    return this.label;
}

public getAmount():number{
    return this.amount;
}

public getCategory():string{
    return this.category;
}

public getCreatedAt():Date{
    return this.createdAT;
}
}

