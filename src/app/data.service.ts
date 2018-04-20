import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Building } from './building/building';
import { coreBuilding} from './building/coreBuilding';

@Injectable()
export class DataService {
  goldCount:number = 0;
  goldCount$ = new BehaviorSubject(0);
  history : Array<Building> = [];
  history$ = new BehaviorSubject([]);

  core$= new BehaviorSubject(new coreBuilding ());
  core = new coreBuilding();


  constructor() {
    // this.core$.caveHigh = 10;
    // this.core$.caveLow = 5;
   }

  // retrieveGold(){
  //   return this.goldCount;
  // }

  addGold(building:Building):number{
    console.log(`in Service addGold`);

    if (building.place == 'farm'){building.gold = Math.floor(Math.random() * (this.core.farmHigh - this.core.farmLow + 1)) + this.core.farmLow;}
    
    this.goldCount = this.goldCount + building.gold;
    console.log(`goldCount in Service is now ${this.goldCount} from ${building.place}`);
    this.goldCount$.next(this.goldCount);
    
    this.history.push(building);
    console.log(`service this.history is ${this.history}`);
    this.history$.next(this.history);

    return this.goldCount;
  }

  


}
