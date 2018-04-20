export class Building{
    constructor(
        public place: String = '',
        public gold : number = 0,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}