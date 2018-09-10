export class Customer {
    public Id: number;
    public FulName: string;
    public CreatedUser: string;

    constructor(createdUser: string) {
        this.CreatedUser = createdUser;
    }
}