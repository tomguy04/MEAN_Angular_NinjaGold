export class Building{
    constructor(
        public place: string = '',
        public gold : number = 0,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}