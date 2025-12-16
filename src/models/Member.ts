export class Member {
    public borrowedBooks: string[] = []; // Store IDs
    constructor(
        public id: string,
        public name: string
    ) { }
}
