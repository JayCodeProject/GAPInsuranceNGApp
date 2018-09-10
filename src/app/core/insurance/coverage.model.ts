export class Coverage {
    public Id: number;
    public Name: string;
    public Detail: string;
    public CreatedUser: string;

    constructor(createdUser: string) {
        this.CreatedUser = createdUser;
    }
}