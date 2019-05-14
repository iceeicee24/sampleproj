export class Menu {
    constructor(
        public id: string,
        public productName: string,
        public itemType: string,
        public category: string,
        public subCategory: string,
        public description: string,
        public dateAvailability: Date,
        public preparationTime: number,
        public orderCapacity: number,
        public exchange: string,
        public sellerId: string
    ) {}
}
