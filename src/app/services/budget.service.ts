import { Injectable } from '@angular/core';
import { BudgetEntry } from '../entity/budget-entry';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private budgetList:Array<BudgetEntry> = [];

  constructor() { 
    console.log("Construction d'un service")
    //Ajout d'une ligne au tableau des dépenses
    let entry = new BudgetEntry(
      (new Date()).getTime(),
      {label: "loyer", category: "Maison", amount: 700, createdAT: new Date}
    );
    
    this.budgetList.push(entry);
  }

  public getBudgetList(): Array<BudgetEntry>{
    return this.budgetList;
  }
  public addEntry(infos:BudgetEntry){
    this.budgetList.push(infos);
  }
}
