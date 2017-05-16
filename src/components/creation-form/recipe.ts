export class Recipe {
    constructor(
        public name: string,
        public date: string,
        public pg: number,
        public nicotine: number,
        public totalQty: number,
        public baseQty: number,
        public boosterQty: number,
        public flavourQty: number
    ) {  }
}