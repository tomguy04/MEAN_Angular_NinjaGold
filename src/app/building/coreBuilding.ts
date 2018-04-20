export class coreBuilding{
    constructor(
        public farmLow: number = 2,
        public farmHigh : number =5,
        public caveLow: number = 5,
        public caveHigh: number = 10,
        public casinoLow: number = -100,
        public casinoHigh : number =100,
        public houseLow: number = 7,
        public houseHigh: number = 15,
        public caveName : string = 'Cave',
        public casinoName : string = 'Casino',
        public houseName : string = 'House',
        public farmName : string = 'Farm'
    ){}
}

