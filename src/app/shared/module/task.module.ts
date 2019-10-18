export class Task {
    constructor(
        public name: string,
        public description: string,
        public priority: string,
        public status: string,
        public  data: any,
        public  id?: number,
    ){}
}
